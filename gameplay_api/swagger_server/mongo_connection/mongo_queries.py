"""
This file contains all the queries to the database, it must use the
MongoDBConnection to connect to the MOngoDB so its transparent to the user
"""

from swagger_server.mongo_connection.mongo_connector import MongoDBConnection


def check_connection():
    """
    This function prints the infor server so you can check that the connection
    is working
    """
    return MongoDBConnection.driver.server_info()

def get_start_scene(game_code, version, chapter_code):

    gameChapters = MongoDBConnection.get_chapters_collection().find_one({'chapterCode':chapter_code,'game':{'gameCode':game_code,'version':version}})

    try:
        return {'startScene':gameChapters['startScene'], 'startX':gameChapters['startX'],'startY':gameChapters['startY']}
    except TypeError:
        return ""

def get_saved_state_scene(student_code, game_code, version, variable_name):

    savedStateVariables = MongoDBConnection.get_saved_states_collection().find_one({'studentCode':student_code, 'gameCode':game_code, 'version':version})

    try:
        _return = savedStateVariables['variables'][variable_name]
    except:
        _return = ""

    return _return

def post_saved_state_scene(student_code, game_code, version, variable_name, value):


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

    return True

def post_decision(student_code, event_code, decision):

    ids = MongoDBConnection.get_decisions_collection().find().distinct('decisionCode')

    finalDecision = {}
    for dec in decision._decision:
        finalDecision[dec._key] = dec._value

    _existing = MongoDBConnection.get_decisions_collection().find_one({'eventCode':event_code, 'studentCode':student_code})

    if _existing is not None:
        MongoDBConnection.get_decisions_collection().update_one({'eventCode':event_code, 'studentCode':student_code},{'$set': {'fields':finalDecision}})
    else:
        MongoDBConnection.get_decisions_collection().insert_one({'eventCode':event_code, 'studentCode':student_code,'fields':finalDecision})

    return True
