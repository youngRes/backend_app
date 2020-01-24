import connexion
import six

from swagger_server.models.entry_list import EntryList  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501
from swagger_server.models.inline_response2004 import InlineResponse2004  # noqa: E501
from swagger_server import util


def decision_get(game_code=None, game_version=None, chapter_codes=None, events_codes=None, group_filter=None, student_filter=None, limit=None, page=None):  # noqa: E501
    """returns decisions taken by students. Has several filter options.

     # noqa: E501

    :param game_code: id of the game to be selected. If Null all games are ruterned.
    :type game_code: str
    :param game_version: Only used if gameCode is not null, version of a game to be retrieve. If null all versions are returned.
    :type game_version: str
    :param chapter_codes: Only used if gameCode and version is not null, only decisions from chapters in the list are returned.
    :type chapter_codes: List[str]
    :param events_codes: if null all events are returned, otherwise only the events at the list are returned.
    :type events_codes: List[str]
    :param group_filter: dictionary with the filters to apply to the groups. If empty no filter is applied.
    :type group_filter: list | bytes
    :param student_filter: dictionary with the filters to apply to the students. If empty no filter is applied.
    :type student_filter: list | bytes
    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2004
    """
    if connexion.request.is_json:
        group_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    if connexion.request.is_json:
        student_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    return 'do some magic!'


def events_get(events_codes=None, limit=None, page=None):  # noqa: E501
    """returns information about events inside the video game.

     # noqa: E501

    :param events_codes: if null all events are returned, otherwise only the events at the list are returned.
    :type events_codes: List[str]
    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2003
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


    :rtype: InlineResponse200
    """
    return 'do some magic!'


def filters_test_get():  # noqa: E501
    """returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).

     # noqa: E501


    :rtype: InlineResponse200
    """
    return 'do some magic!'


def games_get(game_code=None, game_version=None, limit=None, page=None):  # noqa: E501
    """returns information about the available games.

     # noqa: E501

    :param game_code: id of the game to be selected. If Null all games are ruterned.
    :type game_code: str
    :param game_version: Only used if gameCode is not null, version of a game to be retrieve. If null all versions are returned.
    :type game_version: str
    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2002
    """
    return 'do some magic!'


def test_get(group_filter=None, student_filter=None, test_filter=None, limit=None, page=None):  # noqa: E501
    """returns the results of the tests taken by the students.

     # noqa: E501

    :param group_filter: dictionary with the filters to apply to the groups. If empty no filter is applied.
    :type group_filter: list | bytes
    :param student_filter: dictionary with the filters to apply to the students. If empty no filter is applied.
    :type student_filter: list | bytes
    :param test_filter: dictionary with the filters to apply to the tests. If empty no filter is applied.
    :type test_filter: list | bytes
    :param limit: limits the number of results returned.
    :type limit: int
    :param page: used for pagination, allows skyping limit entries before starting to return results.
    :type page: int

    :rtype: InlineResponse2001
    """
    if connexion.request.is_json:
        group_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    if connexion.request.is_json:
        student_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    if connexion.request.is_json:
        test_filter = [EntryList.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    return 'do some magic!'
