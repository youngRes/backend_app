"""
This file contains all the queries to the database, it must use the
MongoDBConnection to connect to the MOngoDB so its transparent to the user
"""
import pymongo
from typing import List, Dict
from swagger_server.mongo_connection.mongo_connector import MongoDBConnection

def get_chapter(game_code, version, chapter_code):

    gameChapter = MongoDBConnection.get_chapters_collection().find_one({'chapterCode':chapter_code, 'gameCode':game_code,'version':version})

    return gameChapter

def get_event_by_id(_id):

    event = MongoDBConnection.get_events_collection().find_one({'_id':_id})

    return event


def get_events(game_code, version, chapter_code) -> pymongo.cursor.Cursor:
    db = MongoDBConnection.get_events_collection()
    return db.find({'chapterCode':chapter_code, 'gameCode':game_code, 'version':version})


def get_decisions(student_ids: List[str], event_ids: List[str]) -> pymongo.cursor.Cursor:
    db = MongoDBConnection.get_decisions_collection()
    decisions = db.find({'studentCode': {'$in': student_ids}, 'eventCode': {'$in': event_ids}})
    return decisions


def get_game_students(game_code: str, version: str) -> List[str]:
    db = MongoDBConnection.get_events_collection()
    events = [r['_id'] for r in db.find({'gameCode':game_code, 'version':version}, {'_id': 1})]

    db = MongoDBConnection.get_decisions_collection()
    return db.find({'eventCode': {'$in': events}}, {'studentCode': 1}).distinct('studentCode')

def get_student(student_code):
    student = MongoDBConnection.get_students_collection().find_one({'_id':student_code})
    return student

def get_students_in_groups(group_ids: List[str]) -> pymongo.cursor.Cursor:
    db = MongoDBConnection.get_students_collection()
    return db.find({'groupCode': {'$in': group_ids}})


def get_students_pass_filter(query: dict) -> List[str]:
    db = MongoDBConnection.get_students_collection()
    return db.find(query, {'_id': 1}).distinct('_id')


def get_game_countries(game_code, version, students):
    db = MongoDBConnection.get_students_collection()
    groups = db.find({"_id": {"$in": students}}).distinct('groupCode')

    db = MongoDBConnection.get_groups_collection()
    return db.find({"_id": {"$in": groups}}).distinct('country')

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


def get_group_filter_values(group_ids: List[str], column: str) -> List[str]:
    db = MongoDBConnection.get_groups_collection()
    return db.find({'_id': {'$in': group_ids}}, {column: 1}).distinct(column)


def get_student_filter_values(student_ids: List[str], column: str) -> List[str]:
    db = MongoDBConnection.get_students_collection()
    return db.find({'_id': {'$in': student_ids}}, {column: 1}).distinct(column)


def get_filter(id):
    return MongoDBConnection.get_filters_collection().find_one({'_id':id})


def get_filters(ids: List[str], table: str = None) -> pymongo.cursor.Cursor:
    query = {'_id': {'$in': ids}}
    if table is not None:
        query['table'] = table

    return MongoDBConnection.get_filters_collection().find(query)


def get_filter_type_dict(table: str) -> Dict[str, str]:
    """
    Returns a dictionary where the keys are the different 'field' in the table
    and the values are the types of those fields
    """
    db = MongoDBConnection.get_filters_collection()

    f_dict = {}
    with db.find({'table': table}, {'field': 1, 'type': 1}) as cursor:
        for row in cursor:
            f_dict[row['field']] = row['type']

    return f_dict


def get_group(id):
    return MongoDBConnection.get_groups_collection().find_one({'_id':id})


def get_groups(ids: List[str]) -> pymongo.cursor.Cursor:
    return MongoDBConnection.get_groups_collection().find({'_id': {'$in': ids}})


def get_groups_pass_filter(query: dict) -> List[str]:
    db = MongoDBConnection.get_groups_collection()
    return db.find(query, {'_id': 1}).distinct('_id')


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
