#!/usr/bin/env python3

import connexion

from flask_cors import CORS
from swagger_server import encoder
from swagger_server.mongo_connection.mongo_connector import MongoDBConnection


def main():
    MongoDBConnection.initialize_connection('db', 27017)

    app = connexion.App(__name__, specification_dir='./swagger/')
    CORS(app.app)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'YoungRes data comsuption API'}, pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
