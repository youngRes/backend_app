import connexion
import six

from swagger_server.models.chapter import Chapter  # noqa: E501
from swagger_server.models.entry_list import EntryList  # noqa: E501
from swagger_server.models.event import Event  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501
from swagger_server import util


def decision_get(game_code=None, game_version=None, chapter_code=None, group_filter=None, student_filter=None, test_filter=None):  # noqa: E501
    """returns decisions taken by students. Has several filter options.

     # noqa: E501

    :param game_code: id of the game to be selected
    :type game_code: str
    :param game_version: version of a game to be retrieve
    :type game_version: str
    :param chapter_code: only decisions taken in events from this chapter are returned.
    :type chapter_code: str
    :param group_filter: dictionary with the filters to apply to the groups. If empty no filter is applied.
    :type group_filter: list | bytes
    :param student_filter: dictionary with the filters to apply to the students. If empty no filter is applied.
    :type student_filter: list | bytes
    :param test_filter: dictionary with the filters to apply to the test paased by the students. If empty no filter is applied.
    :type test_filter: list | bytes

    :rtype: InlineResponse2003
    """
    if connexion.request.is_json:
        group_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    if connexion.request.is_json:
        student_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    if connexion.request.is_json:
        test_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    return 'do some magic!'


def descriptions_chapter_get(game_code=None, game_version=None, chapter_code=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param game_code: code that identifies a video game. Together  with the version uniquely identifies a video game.
    :type game_code: str
    :param game_version: version of an specific video game. Together  with the gameCode uniquely identifies a video game.
    :type game_version: str
    :param chapter_code: chapter to retrieve information from
    :type chapter_code: str

    :rtype: Chapter
    """
    return 'do some magic!'


def descriptions_event_get(game_code=None, game_version=None, chapter_code=None, event_code=None):  # noqa: E501
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
    return 'do some magic!'


def descriptions_games_get(limit=None, page=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2002
    """
    return 'do some magic!'


def filters_group_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the groups. Each field contains the name, the type (numeric, textual) and all the values associated to that field (without repetition).

     # noqa: E501


    :rtype: InlineResponse200
    """
    return 'do some magic!'


def filters_student_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the students. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """
    return 'do some magic!'


def filters_test_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse2001
    """
    return 'do some magic!'
