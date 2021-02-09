"""
This file contains all the queries to the database, it must use the
MongoDBConnection to connect to the MOngoDB so its transparent to the user
"""

from typing import Dict

from swagger_server.models import Decision
from swagger_server.mongo_connection.mongo_connector import MongoDBConnection


def check_connection():
    """
    This function prints the infor server so you can check that the connection
    is working
    """
    return MongoDBConnection.driver.server_info()

def student_exists(studentCode: str) -> bool:
    db = MongoDBConnection.get_students_collection()
    return db.find_one({'studentCode': studentCode}) is not None

def get_start_scene(game_code: str, version: str, chapter_code: str) -> Dict[str, str]:
    gameChapters = MongoDBConnection.get_chapters_collection().find_one({'chapterCode':chapter_code, 'gameCode':game_code,'version':version})
    if gameChapters is not None:
        return {'startScene': gameChapters['startScene'], 'startX': gameChapters['startX'], 'startY': gameChapters['startY']}
    else:
        return None

def get_saved_state(student_code: str, game_code: str, version: str, variable_name: str):
    savedStateVariables = MongoDBConnection.get_saved_states_collection().find_one({'studentCode':student_code, 'gameCode':game_code, 'version':version})
    if savedStateVariables is not None and variable_name in savedStateVariables['variables']:
        return savedStateVariables['variables'][variable_name]
    else:
        return None

def post_saved_state_scene(student_code: str, game_code: str, version: str, variable_name: str, value: str):

    #docs = MongoDBConnection.get_saved_states_collection().find({'studentCode':str(student_code), 'gameCode':str(game_code), 'version':str(version)})
    savedStateVariables = MongoDBConnection.get_saved_states_collection().find_one({'studentCode':student_code, 'gameCode':game_code, 'version':version})
    if savedStateVariables is not None:
        savedStateVariables['variables'][variable_name] = value
        MongoDBConnection.get_saved_states_collection().find_one_and_replace({'studentCode':student_code, 'gameCode':game_code, 'version':version}, savedStateVariables)
    else:
        # make default saved state
        savedStateVariables = {
            'stateCode': student_code,
            'studentCode': student_code,
            'gameCode': game_code,
            'version': version,
            'variables': {
                variable_name: value
            }
        }
        MongoDBConnection.get_saved_states_collection().insert_one(savedStateVariables)


def post_decision(student_code: str, event_code: str, decision: Decision):

    ids = MongoDBConnection.get_decisions_collection().find().distinct('decisionCode')

    finalDecision = {}
    for dec in decision._decision:
        finalDecision[dec._key] = dec._value

    _existing = MongoDBConnection.get_decisions_collection().find_one({'eventCode':event_code, 'studentCode':student_code})

    if _existing is not None:
        MongoDBConnection.get_decisions_collection().update_one({'eventCode':event_code, 'studentCode':student_code},{'$set': {'fields':finalDecision}})
    else:
        MongoDBConnection.get_decisions_collection().insert_one({'eventCode':event_code, 'studentCode':student_code,'fields':finalDecision})

