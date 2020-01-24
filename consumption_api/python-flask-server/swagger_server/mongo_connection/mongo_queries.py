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
