import connexion
import json
import sys

from typing import List, Dict
from werkzeug.exceptions import Unauthorized, InternalServerError, NotFound

from swagger_server.controllers.authorization_controller import make_token, check_user_credentials
from swagger_server.models.filter_apply import FilterApply
from swagger_server.models.group import Group
from swagger_server.models.decision import Decision
from swagger_server.models.game import Game
from swagger_server.models.chapter import Chapter  # noqa: E501
from swagger_server.models.event import Event  # noqa: E501
from swagger_server.models.filter import Filter
from swagger_server.models.entry import Entry
from swagger_server.models.student import Student

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501

import swagger_server.mongo_connection.mongo_queries as dbq


def _filter2query(filters: List[Entry], filter_types: Dict[str, str]) -> dict:
    """
    Reads a list of entries with the filters to apply and a dictionary with the
    type of each filter and generates a dictionary with the query to be
    passed to mongo DB
    """
    query = {}
    for f in filters:
        ftr_type = filter_types[f._key]
        if ftr_type == 'textual':
            # if the type is textual then the value of that column need
            # to be equals to min_value
            query[f._key] = f._min_value
        elif ftr_type == 'numeric':
            # if the type is numeric then the value of that column need
            # to be between the specified values
            try:
                query[f._key] = {
                    '$gte': int(f._min_value),
                    '$lte': int(f._max_value)
                }
            except ValueError as e:
                print(f'{e}', file=sys.stderr)

        else:
            raise KeyError(f"unknow filter type {ftr_type}")
    return query


def decision_get(game_code, game_version, chapter_code, token_info):  # noqa: E501
    """returns decisions taken by students. Has several filter options.

     # noqa: E501

    :param game_code: id of the game to be selected
    :type game_code: str
    :param game_version: version of a game to be retrieve
    :type game_version: str
    :param chapter_code: only decisions taken in events from this chapter are returned.
    :type chapter_code: str

    :rtype: InlineResponse2003
    """

    def _process_group_filter(group_filter: List[Entry]) -> List[str]:
        """
        Extracts from the database the groups that passes the filters
        """
        if group_filter:
            # separate the 'group_id' filters from the rest
            group_id_filters = []
            normal_filters = []

            for gp_ftr in group_filter:
                if gp_ftr._key == 'group_id':
                    # sanity check
                    if gp_ftr._min_value in all_groups:
                        group_id_filters.append(gp_ftr._min_value)
                else:
                    normal_filters.append(gp_ftr)

            # make the query for the columns
            grp_field_types = dbq.get_filter_type_dict("groups")
            query = _filter2query(normal_filters, grp_field_types)

            # if necessary add the specific groups to the query
            if group_id_filters:
                query['groupCode'] = {'$in': group_id_filters}

            return dbq.get_groups_pass_filter(query)
        else:
            # if no group filter is included then all the groups of the user
            # are used
            return all_groups

    def _process_student_filter(student_filters: List[Entry]) -> List[str]:
        """
        Extracts from the database the students that passes the filters
        """
        all_students = dbq.get_students_in_groups(group_ids).distinct('studentCode')
        if student_filters:
            # not None and not empty, then apply query
            std_field_types = dbq.get_filter_type_dict("students")
            query = _filter2query(student_filters, std_field_types)

            # hotfix, now we can get decision for a single student, in that case, studentCode will be already filled
            if "studentCode" not in query:
                query['studentCode'] = {'$in': all_students}

            return dbq.get_students_pass_filter(query)
        else:
            # if no student filter is included then all the groups of the user
            # are used
            return all_students

    def _make_decision(row) -> Decision:
        # if the event type is "multiple-choice" translate the choice to the possible values
        if event_dict[row['eventCode']]['type'] == "multiple-choice":
            # The first value stored in the dictionary field is the actual choice
            try:
                choice_index = int(list(row['fields'].values())[0])

                # Read the value of this choice from the possible values stored at the event
                possible_values = event_dict[row['eventCode']]['possibleChoices']
                if 0 < choice_index <= len(possible_values):
                    choice = possible_values[choice_index - 1]
                else:
                    choice = "ERROR"
                    print(f'decision {row["_id"]} reference choice {choice_index} but this choice is not available among '
                          f'the possible choices: {possible_values}', file=sys.stderr)
            except ValueError:
                # if the conversion of a choice_index fails that means the RPGMaker has sent that value already
                # with the choice name
                choice = list(row['fields'].values())[0]
        else:
            # in the case of numeric type events just return the raw value
            choice = list(row['fields'].values())[0]

        return Decision(
            event_code=row['eventCode'],
            event_description=event_dict[row['eventCode']]['description'],
            event_type=event_dict[row['eventCode']]['type'],
            choice=choice,
            student=_make_student(row["studentCode"])
        )

    def _make_student(student_code: str) -> Student:
        student_data = dbq.get_student_and_group(student_code)
        if student_data is not None:
            return Student(
                student_code=student_data["studentCode"],
                sex=student_data["sex"],
                age=student_data["age"],
                country=student_data["country"],
                city=student_data["city"],
                group_code=student_data["groupCode"]
            )
        else:
            return None

    try:
        # Header parameters are not pass as a parameters, instead they are contained in
        # the headers variable and need to processed by hand
        filters_str = connexion.request.headers.get("filters")
        filters = None
        if filters_str is not None:
            filters = FilterApply.from_dict(json.loads(filters_str))

        # get the user from the token and check his groups
        username = token_info['user']
        permissions = dbq.get_user_credentials(username)
        all_groups = permissions['groups']

        if filters is None:
            # if no filters are present then select all the students available
            # for the user
            students_ids = dbq.get_students_in_groups(all_groups).distinct('studentCode')
        else:
            # process the students and groups filters
            group_ids = _process_group_filter(filters._group)
            students_ids = _process_student_filter(filters._student)

        # get the events of the chapter for creating the decisions
        event_dict = {}
        with dbq.get_events(game_code, game_version, chapter_code) as cursor:
            for row in cursor:
                event_dict[row['eventCode']] = row

        # get the list of eventCodes for retrieving the decisions
        event_ids = list(event_dict.keys())

        # read and process the decisions
        ds = [_make_decision(row) for row in dbq.get_decisions(students_ids, event_ids)]
        return InlineResponse2003(decisions=ds)

    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError


def descriptions_chapter_get(game_code, game_version, chapter_code, token_info):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param game_code: code that identifies a video game. Together  with the version uniquely identifies a video game.
    :type game_code: str
    :param game_version: version of an specific video game. Together  with the gameCode uniquely identifies a video game.
    :type game_version: str
    :param chapter_code: chapter to retrieve information from
    :type chapter_code: strFilter
    :rtype: Chapter
    """
    try:
        chapter = dbq.get_chapter(game_code, game_version, chapter_code)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError

    if chapter is not None:
        return Chapter(chapter_code=chapter_code,
                chapter_description=chapter['chapterDescription'],
                highlights=chapter['highlights'],
                snapshot=chapter['snapshot'])
    else:
        raise NotFound


def descriptions_event_get(game_code, game_version, chapter_code, event_code, token_info):  # noqa: E501
    """returns information about events inside the video game.

     # noqa: E501

    :param game_code: code that identifies a video game. Together  with the version uniquely identifies a video game.
    :type game_code: str
    :param game_version: version of an specific video game. Together  with the gameCode uniquely identifies a video game.
    :type game_version: str
    :param chapter_code: chapter to retrieve information from
    :type chapter_code: str
    :param event_code: code of the event to be retreive
    :type event_code: str

    :rtype: Event
    """
    try:
        event = dbq.get_event_by_id(event_code)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError

    if event is not None:
        return Event(event_code=event_code,
                event_description=event['description'],
                highlights=event['highlights'],
                event_type=event['type'],
                parent_decision=event['parentDecision'],
                possible_choices=event['possibleChoices'])
    else:
        raise NotFound


def descriptions_games_get(token_info, limit=None, page=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2002
    """
    try:
        games = dbq.get_games()
        gs = []
        for index, game in enumerate(games):

            students = dbq.get_game_students(game['gameCode'], game['version'])
            countries = dbq.get_game_countries(game['gameCode'], game['version'], students)
            gs.append(
                Game(game_code=game['gameCode'],
                     game_version=game['version'],
                     game_description=game['gameDescription'],
                     number_players=len(students),
                     countries=countries,
                     chapters=game['chapters'])
                    )
        return InlineResponse2002(games=gs)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError


def filters_group_get(token_info):  # noqa: E501
    """returns information related to the possible filters that can be apply to the groups. Each field contains the name, the type (numeric, textual) and all the values associated to that field (without repetition).

     # noqa: E501

    :rtype: InlineResponse200
    """
    def _make_filter(row):
        return Filter(
            id=row['field'],
            type=row['type'],
            values=dbq.get_group_filter_values(all_groups, row['field']))

    def _make_group(row):
        return Group(group_id=row['groupCode'], description=row['description'])

    try:
        username = token_info['user']

        permissions = dbq.get_user_credentials(username)
        all_groups = permissions['groups']
        group_ids = [_make_group(row) for row in dbq.get_groups(all_groups)]
        filters = [_make_filter(row) for row in dbq.get_filters(permissions['filters'], 'groups')]

        return InlineResponse200(filters=filters, group_ids=group_ids)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError


def filters_student_get(token_info):  # noqa: E501
    """returns information related to the possible filters that can be apply to the students. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501
    :rtype: InlineResponse2001
    """
    def _make_filter(row):
        return Filter(
            id=row['field'],
            type=row['type'],
            values=dbq.get_student_filter_values(all_students, row['field']))

    try:
        username = token_info['user']

        permissions = dbq.get_user_credentials(username)
        all_students = dbq.get_students_in_groups(permissions['groups']).distinct('studentCode')
        filters = [_make_filter(row) for row in dbq.get_filters(permissions['filters'], 'students')]

        return InlineResponse2001(filters=filters)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError


def filters_test_get(token_info):  # noqa: E501
    """returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501
    :rtype: InlineResponse2001
    """
    return f"{token_info['user']}"


def login_post():  # noqa: E501event = dbq.get_event_by_id(event_code)
    """Logins an user into the system.

     # noqa: E501

    :param user: code that identifies a video game. Together  with the version uniquely identifies a video game.
    :type user: str
    :param password: version of an specific video game. Together  with the gameCode uniquely identifies a video game.
    :type password: str

    :rtype: Token
    """
    # Header paramets are not pass as a paramets, instead they are contained
    # in the headers variable and need to processed by hand
    user = connexion.request.headers.get("user")
    password = connexion.request.headers.get("password")

    if check_user_credentials(user, password):
        try:
            return make_token(user)
        except Exception as e:
            print(f'{e}', file=sys.stderr)
            raise InternalServerError
    else:
        raise Unauthorized
