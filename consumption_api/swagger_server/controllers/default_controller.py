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
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501
from swagger_server import util


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
    filters_str = connexion.request.headers.get("filters")
    if filters_str is not None:
        filters = FilterApply.from_dict(json.loads(filters_str))

    # process the request
    if chapter_code == "C1":
        ds = [
            Decision(event_code="e1.1", event_description="Whats animal is your pet?", event_type="multiple-choice", choice="cat"),
            Decision(event_code="e1.1", event_description="Whats animal is your pet?", event_type="multiple-choice", choice="dog")
        ]
    else:
        ds = [
            Decision(event_code="e2.1", event_description="Seconds waiting for your friend", event_type="timed", choice="90"),
            Decision(event_code="e2.1", event_description="Seconds waiting for your friend", event_type="timed", choice="10")
        ]

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

    if chapter_code == "C1":
        return Chapter(
            chapter_code="C1",
            chapter_description="Chapter-1: Welcome to the school",
            highlights=[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            snapshot="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/600px-Happy_smiley_face.png")
    else:
        return Chapter(
            chapter_code="C2",
            chapter_description="Chapter-2: Moms new job",
            highlights=[
                "H1 - Lorem ipsum dolomultiple-choicer sit amet, consectehttps://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/600px-Happy_smiley_face.pngtur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            snapshot="https://es.m.wikipedia.org/wiki/Archivo:Happy_smiley_face.png#/media/File%3A718smiley.png")


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

    if event_code == "e1.1":
        e = Event(
            event_code="e1.1",
            event_description="Whats animal is your pet?",
            highlights=[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            event_type="multiple-choice",
            parent_decision=None,
            possible_choices=['cat', 'dog', 'no pet'])
    else:
        e = Event(
            event_code="e2.1",
            event_description="Seconds waiting for your friend",
            highlights=[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            event_type="timed",
            parent_decision=None,
            possible_choices=['1', '90'])
    return e


def descriptions_games_get(limit=None, page=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2002
    """
    gs = [
        Game(
            game_code="G1",
            game_version="v1",
            game_description="Game were LGTBI content is discussed",
            number_players="60",
            countries=["Spain", "Finland"],
            chapters=["C1", "C2"])
    ]
    return InlineResponse2002(games=gs)


def filters_group_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the groups. Each field contains the name, the type (numeric, textual) and all the values associated to that field (without repetition).

     # noqa: E501


    :rtype: InlineResponse200
    """
    return InlineResponse200(
        filters=[
            Filter(id="country", type="textual", values=["Spain", "Finland"]),
            Filter(id="city", type="textual", values=["Madrid", "Oulu"])
        ],
        group_ids=[
            Group(group_id="UPM_3A", description="Class 3º A from UPM"),
            Group(group_id="UPM_3B", description="Class 3º B from UPM")
        ])


def filters_student_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the students. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """
    return InlineResponse2001(
        filters=[
            Filter(id="sex", type="textual", values=["Female", "Male"]),
            Filter(id="age", type="numeric", values=["10", "13"])
        ])


def filters_test_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """
    return 'for now not in use'
