"""
This file contains all the queries to the database, it must use the
MongoDBConnection to connect to the MOngoDB so its transparent to the user
"""

from swagger_server.mongo_connection.mongo_connector import MongoDBConnection

def get_chapter(game_code, version, chapter_code):

    gameChapter = MongoDBConnection.get_chapters_collection().find_one({'chapterCode':chapter_code, 'gameCode':game_code,'version':version})

    return gameChapter

def get_event_by_id(_id):

    event = MongoDBConnection.get_events_collection().find_one({'_id':_id})

    return event

def get_event(game_code, version, chapter_code, event_code):

    event = MongoDBConnection.get_events_collection().find_one({'chapterCode':chapter_code, 'eventCode':event_code, 'gameCode':game_code, 'version':version})

    return event

def get_decisions(game_code, version, chapter_code):

    decisions = MongoDBConnection.get_decisions_collection().find({'chapterCode':chapter_code,'gameCode':game_code, 'version':version})

    return decisions

def get_game_students(game_code, version):

    students = MongoDBConnection.get_decisions_collection().find({'gameCode':game_code, 'version':version}).distinct('studentCode')

    return students

def get_student(student_code):

    student = MongoDBConnection.get_students_collection().find_one({'_id':student_code})

    return student

def get_game_countries(game_code, version, students):
    
    groups = MongoDBConnection.get_students_collection().find({"_id": {"$in": students}}).distinct('groupCode')

    return MongoDBConnection.get_groups_collection().find({"_id": {"$in": groups}}).distinct('country')

def get_games():

    games = MongoDBConnection.get_games_collection().find({})

    return games

def get_user_credentials(username):

    return MongoDBConnection.get_credentials_collection().find_one({"_id": username})

def get_filter_values(table, column):

    if table == 'groups':
        values = MongoDBConnection.get_groups_collection().distinct(column)
    elif table == 'students':
        values = MongoDBConnection.get_students_collection().distinct(column)
    elif table == 'test':
        values = MongoDBConnection.get_tests_collection().distinct(column)
    elif table == 'saved_state':
        values = MongoDBConnection.get_saved_state_collection().distinct(column)
    elif table == 'games':
        values = MongoDBConnection.get_games_collection().distinct(column)
    elif table == 'chapters':
        values = MongoDBConnection.get_chapters_collection().distinct(column)
    elif table == 'events':
        values = MongoDBConnection.get_events_collection().distinct(column)
    elif table == 'decisions':
        values = MongoDBConnection.get_decisions_collection().distinct(column)

    try:
        values = list(map(int, values))
        return [min(values), max(values)]
    except:
        return values

def get_filter(id):

    return MongoDBConnection.get_filters_collection().find_one({'_id':id})

def get_group(id):
        
    return MongoDBConnection.get_groups_collection().find_one({'_id':id})

def get_student_filter_type(field):

    return MongoDBConnection.get_filters_collection().find_one({'table':'students', 'field':field})

def get_group_filter_type(field):

    return MongoDBConnection.get_filters_collection().find_one({'table':'groups', 'field':field})

def check_connection():
    """
    This function prints the infor server so you can check that the connection
    is working
    """
    return MongoDBConnection.driver.server_info()
