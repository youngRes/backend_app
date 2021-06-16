"""
    This static class stores the connection to a MongoDB database so it can be used by all controllers and be initialize
    out of them, like this the same code of the controllers can be used for testing and for production.
"""
import os
import pymongo
import gridfs


class MongoDBConnection(object):
    """
    the connection object, this object should be private
    """
    host = None
    port = None
    driver = None

    @classmethod
    def initialize_connection(cls, host: str, port: int):
        """
        initialize the class with a new connection
        :param host: url where the MongoDB is stored
        :param port: port where the MongoDB is listening
        :return None
        """
        cls.host = host
        cls.port = port
        cls.driver = pymongo.MongoClient(cls.host, cls.port, 
            username=os.environ['MONGO_USER'], password=os.environ['MONGO_PASSWORD'])

    @classmethod
    def reinitialize(cls):
        """
        Call this method after a fork is done to reinitialize the MongoClient. This method does not need to be called if
        a new thread is created only if a fork is created.
        :return:
        """
        cls.driver = pymongo.MongoClient(cls.host, cls.port, 
            username=os.environ['MONGO_USER'], password=os.environ['MONGO_PASSWORD'])

    @classmethod
    def drop_database(cls):
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            cls.driver.drop_database('games_db')
            cls.driver.drop_database('login_db')

    @classmethod
    def get_groups_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.groups

    @classmethod
    def get_students_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.students

    @classmethod
    def get_tests_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.tests

    @classmethod
    def get_saved_states_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.get_saved_states

    @classmethod
    def get_games_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.games

    @classmethod
    def get_chapters_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.chapters

    @classmethod
    def get_events_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.events

    @classmethod
    def get_decisions_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.games_db.decisions

    @classmethod
    def get_credentials_collection(cls):
        """
        Gets the actual connection to the MongoDB database, and exception is raised if the connection is not initialized
        :return: the connection object to the MongoDB database
        """
        if cls.driver is None:
            raise RuntimeError("Database Connection need to be initialised")
        else:
            return cls.driver.login_db.credentials
