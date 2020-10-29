import sys

import connexion
import six
import json
from flask import  make_response

import swagger_server.mongo_connection.mongo_queries as dbq
from swagger_server.models.decision import Decision  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server import util
from werkzeug.exceptions import  InternalServerError, NotFound, BadRequest


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
    try:
        queryResult = dbq.get_start_scene(game_code, version, chapter_code)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError

    if queryResult is not None:
        return InlineResponse2001(queryResult)
    else:
        raise NotFound



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
    try:
        queryResult = dbq.get_saved_state(student_code, game_code, version, variable_name)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError

    if queryResult is not None:
        return InlineResponse200(queryResult)
    else:
        raise NotFound

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
    try:
        dbq.post_saved_state_scene(student_code, game_code, version, variable_name, value)
        return make_response("OK", 200)
    except Exception as e:
        print(f'{e}', file=sys.stderr)
        raise InternalServerError


def store_decision_post(student_code, event_code):  # noqa: E501
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

    # Header parameters are not pass as a parameters, instead they are contained in
    # the headers variable and need to processed by hand
    decision_str = connexion.request.headers.get("decision")
    if decision_str is not None:
        try:
            decision = Decision.from_dict(json.loads(decision_str))
            dbq.post_decision(student_code, event_code, decision)
            return make_response("OK", 200)
        except Exception as e:
            print(f'{e}', file=sys.stderr)
            raise InternalServerError
    else:
        raise BadRequest

