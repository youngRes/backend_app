import os
import jwt
import datetime
import six
from typing import List
from werkzeug.exceptions import Unauthorized
from swagger_server.models.token import Token

from swagger_server.mongo_connection.mongo_queries import get_user_credentials
"""
controller generated to handled auth operation described at:
https://connexion.readthedocs.io/en/latest/security.html
"""

def check_bearerAuth(token):
    """
    Check if the token received is a valid one. If all correct the data
    contained in the token is returned, otherwise an exception is raised
    """
    try:
        return jwt.decode(token, os.environ['SECRET_KEY'], algorithms="HS256")
    except Exception as e:
        six.raise_from(Unauthorized, e)


def make_token(user: str) -> Token:
    """
    Generates a new encrypted token for an user_id. By default tokens last 24h
    """
    data = {
        'user': user,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }
    token = jwt.encode(data, os.environ['SECRET_KEY'], algorithm="HS256")
    return Token(token)

def check_user_credentials(user: str, password: str) -> bool:
    """
    Checks if the password provided is the same as the stored on the database
    """

    def _hash(plain_password: str) -> str:
        # TODO: decided a hash fuction to store the passwords on the database
        return plain_password

    credentials = get_user_credentials(user)
    if credentials is not None:
        return _hash(password) == credentials['password']
    else:
        return False
