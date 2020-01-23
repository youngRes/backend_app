import connexion
import six

from swagger_server.models.decision import Decision  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server import util


def chapter_start_scene_get(game_code, version, chapter_code):  # noqa: E501
    """Returns the start scene of a chapter as a sceneID if possible

     # noqa: E501

    :param game_code: code to identify a game
    :type game_code: str
    :param version: code to identify the version of a game
    :type version: str
    :param chapter_code: code to identify the chapter to get the scene of
    :type chapter_code: str

    :rtype: InlineResponse2001
    """
    return 'do some magic!'


def saved_variables_get(student_code, game_code, version, variable_name):  # noqa: E501
    """Returns the value stored on a game variable named variableName if possible

     # noqa: E501

    :param student_code: code to identify a student
    :type student_code: str
    :param game_code: code to identify a game
    :type game_code: str
    :param version: code to identify the version of a game
    :type version: str
    :param variable_name: code to identify the variable stored on save state
    :type variable_name: str

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def saved_variables_post(student_code, game_code, version, variable_name, value):  # noqa: E501
    """Store/Update a variable with variableName and value value if possible. If the user has no saved state for a specific game a new saved state must be generated.

     # noqa: E501

    :param student_code: code to identify a student
    :type student_code: str
    :param game_code: code to identify a game
    :type game_code: str
    :param version: code to identify the version of a game
    :type version: str
    :param variable_name: code of the variable to be stored/updated
    :type variable_name: str
    :param value: textual value to store on the saved state
    :type value: str

    :rtype: None
    """
    return 'do some magic!'


def store_decision_post(student_code, event_code, decision=None):  # noqa: E501
    """Store/Update a new user decision related to the event eventCode with the variables data  into the database.

     # noqa: E501

    :param student_code: code to identify a student
    :type student_code: str
    :param event_code: code to identify an event
    :type event_code: str
    :param decision:
    :type decision: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        decision = from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
