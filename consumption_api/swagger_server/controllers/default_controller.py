import connexion
import json
import six
import sys

from swagger_server.models.filter_apply import FilterApply
from swagger_server.models.group import Group
from swagger_server.models.decision import Decision
from swagger_server.models.game import Game
from swagger_server.models.chapter import Chapter  # noqa: E501
from swagger_server.models.event import Event  # noqa: E501
from swagger_server.models.filter import Filter
from swagger_server.models.credential import Credential
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501
from swagger_server import util

import swagger_server.mongo_connection.mongo_queries as dbq

def decision_get(game_code, game_version, chapter_code):  # noqa: E501
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
    # Header paramets are not pass as a paramets, instead they are contained in the headers variable and need to processed by hand
    filters = None
    existingFilters = False
    filters_str = connexion.request.headers.get("filters")
    if filters_str is not None:
        existingFilters = True
        filters = FilterApply.from_dict(json.loads(filters_str))
    
    decisions = dbq.get_decisions(game_code, game_version, chapter_code)

    ds = []
    if existingFilters == False:
        for dec in decisions:
            event = dbq.get_event(game_code, game_version, chapter_code, dec['eventCode'])
            ds.append(Decision(event_code=dec['eventCode'], event_description=event['description'], event_type=event['type'], choice=dec['decision']))
        return InlineResponse2003(decisions=ds)
    else:
        for dec in decisions:
            ## This variable manages if the decision fulfills the filters
            valid_ = True
            student = dbq.get_student(dec['studentCode'])  ## Get the student attached to this decision
            for filtStu in filters.student: ## Loop over student filters
                #return filtStu
                filter_ = dbq.get_student_filter_type(filtStu._key) ## Get the student filter type (textual or numeric)
                ## If the decision does not fulfill the filter, set valid to False
                if filter_['type'] == 'textual':
                    if student[filtStu._key] != filtStu._value:
                        valid_ = False
                        pass
                elif filter_['type'] == 'numeric':
                    if int(student[filtStu._key]) > int(filtStu._max_value) or int(student[filtStu._key]) < int(filtStu._min_value):
                        valid_ = False
                        pass
            group = dbq.get_group(student['groupCode']) ## Get the group attached to this decision
            for filtStu in filters.group: ## Loop over student filters
                filter_ = dbq.get_group_filter_type(filtStu._key) ## Get the student filter type (textual or numeric)
                ## If the decision does not fulfill the filter, set valid to False
                if filter_['type'] == 'textual':
                    if group[filtStu._key] != filtStu._value:
                        valid_ = False
                        pass
                elif filter_['type'] == 'numeric':
                    if int(group[filtStu._key]) > int(filtStu._max_value) or int(group[filtStu._key]) < int(filtStu._min_value):
                        valid_ = False
                        pass
            ## If valid keeps True, the decision is added to the result list
            if valid_ == True:
                event = dbq.get_event(game_code, game_version, chapter_code, dec['eventCode'])
                ds.append(Decision(event_code=dec['eventCode'], event_description=event['description'], event_type=event['type'], choice=dec['decision']))
        return ds
        return InlineResponse2003(decisions=ds)



def descriptions_chapter_get(game_code, game_version, chapter_code):  # noqa: E501
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

    chapter = dbq.get_chapter(game_code, game_version, chapter_code)
    if chapter == None:
        return None
    return Chapter(chapter_code=chapter_code, chapter_description=chapter['chapterDescription'], highlights=chapter['highlights'], snapshot=chapter['snapshot'])


def descriptions_event_get(game_code, game_version, chapter_code, event_code):  # noqa: E501
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

    event = dbq.get_event(game_code, game_version, chapter_code, event_code)

    if event == None:
        return None

    return Event(event_code=event_code,
                event_description=event['description'], 
                highlights=event['highlights'], 
                event_type=event['type'], 
                parent_decision=event['parentDecision'], 
                possible_choices=event['possibleChoices']
                )


def descriptions_games_get(limit=None, page=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2002
    """

    games = dbq.get_games()
    if games == None:
        return None
    gs = []
    for index, game in enumerate(games):
        if index < limit or limit==None:
            students = dbq.get_game_students(game['gameCode'], game['version'])
            countries = dbq.get_game_countries(game['gameCode'], game['version'], students)
            gs.append(
                Game(game_code=game['gameCode'],
                     game_version=game['version'],
                     game_description=game['gameDescription'],
                     number_players=str(len(students)),
                     countries=countries,
                     chapters=game['chapters'])
                    )

    return InlineResponse2002(games=gs)


def filters_group_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the groups. Each field contains the name, the type (numeric, textual) and all the values associated to that field (without repetition).

     # noqa: E501

    :rtype: InlineResponse200
    """

    username = connexion.request.authorization.username

    permissions = dbq.get_user_credentials(username)
    all_filters = permissions['filters']
    all_groups = permissions['groups']
    filters = []
    group_ids = []
    for ele in all_filters:
        filter_ = dbq.get_filter(ele)
        if filter_['table'] == 'groups':
            filters.append(Filter(id=ele, type=filter_['type'], values=dbq.get_filter_values(filter_['table'], filter_['field'])))
    for ele in all_groups:
        group_ = dbq.get_group(ele)
        group_ids.append(Group(group_id=ele, description=group_['description']))

    return InlineResponse200(
        filters=filters,
        group_ids=group_ids
        )


def filters_student_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the students. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """

    username = connexion.request.authorization.username
    permissions = dbq.get_user_credentials(username)
    all_filters = permissions['filters']
    filters = []
    for ele in all_filters:
        filter_ = dbq.get_filter(ele)
        if filter_['table'] == 'students':
            filters.append(Filter(id=ele, type=filter_['type'], values=dbq.get_filter_values(filter_['table'], filter_['field'])))

    return InlineResponse2001(
        filters=filters
        )


def filters_test_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """
    return 'for now not in use'
