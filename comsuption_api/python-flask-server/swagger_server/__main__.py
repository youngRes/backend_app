#!/usr/bin/env python3

import connexion

import swagger_server.mongo_connection.mongo_queries as dbq
from swagger_server import encoder
from swagger_server.mongo_connection import MongoDBConnection


def main():
    #initilize connection with MongoDB
    MongoDBConnection.initialize_connection('db', 270017)
    print(dbq.check_connection())

    # start the api server
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'YoungRes data comsuption API'}, pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
