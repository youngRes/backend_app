#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from swagger_server.mongo_connection.mongo_connector import MongoDBConnection



def main():
    #initilize connection with MongoDB
    MongoDBConnection.initialize_connection('db', 27017)

    MongoDBConnection.drop_database()

    MongoDBConnection.get_games_collection().insert_many([{"gameCode" : "1", "gameDescription" : "First game created" }])

    MongoDBConnection.get_groups_collection().insert_many([
    {"groupCode" : "1", "country" : "Spain", "city" : "Madrid", "type" : "DevelopmentTests", "description" : "First Test Group" },
    {"groupCode" : "2", "country" : "Spain", "city" : "Madrid", "type" : "Secondary", "description" : "Second Test Group"},
    {"groupCode" : "3", "country" : "Spain", "city" : "Madrid", "type" : "Primary", "description" : "Third Test Group"}])

    MongoDBConnection.get_students_collection().insert_many([
    {"studentCode" : "alfonso", "groupCode" : "1", "sex" : "male", "age" : 15.0},
    {"studentCode" : "angel", "groupCode" : "1", "sex" : "female", "age" : 15.0},
    {"studentCode" : "javi", "groupCode" : "1", "sex" : "female", "age" : 14.0},
    {"studentCode" : "raquel", "groupCode" : "1", "sex" : "male", "age" : 14.0}])

    MongoDBConnection.get_chapters_collection().insert_many([
    {"chapterCode" : "1", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 1: Introduccion", "startScene" : "1"},
    {"chapterCode" : "2", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 10, "startY" : 2, "chapterDescription" : "Capitulo 2: Casa", "startScene" : "24"},
    {"chapterCode" : "3", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 3", "startScene" : "29"},
    {"chapterCode" : "4", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 4: Recreo", "startScene" : "41"},
    {"chapterCode" : "5", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 5: Recuerdo", "startScene" : "49"},
    {"chapterCode" : "6", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 6", "startScene" : "53"},
    {"chapterCode" : "7", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 7: Exterior de la Casa de Ahmed", "startScene" : "67"},
    {"chapterCode" : "8", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 8: Clase", "startScene" : "80"},
    {"chapterCode" : "9", "game" : { "gameCode" : "1", "version" : "1"}, "startX" : 0, "startY" : 0, "chapterDescription" : "Capitulo 9: Interior de Casa", "startScene" : "87"}])

    MongoDBConnection.get_saved_states_collection().insert_many([
    {"stateCode" : "1", "studentCode" : "1", "gameCode" : "1", "version" : "1", "variables" : {"playerName":"Pepito","variable1":"value1","variable2":"value2",'variable4':'value4'}},
    {"stateCode" : "2", "studentCode" : "2", "gameCode" : "1", "version" : "1", "variables" : {"variable3":"value3","variable2":"value2"}},
    {"stateCode" : "3", "studentCode" : "3", "gameCode" : "1", "version" : "1", "variables" : {"variable1":"value1","variable2":"value2"}},
    {"stateCode" : "4", "studentCode" : "4", "gameCode" : "1", "version" : "1", "variables" : {"variable1":"value1","variable4":"value4"}}])

    # start the api server
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'YoungRes gameplay API'}, pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
