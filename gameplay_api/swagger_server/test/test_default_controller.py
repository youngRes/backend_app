# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.decision import Decision  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_chapter_start_scene_get(self):
        """Test case for chapter_start_scene_get

        Returns the start scene of a chapter as a sceneID if possible
        """
        query_string = [('game_code', 'game_code_example'),
                        ('version', 'version_example'),
                        ('chapter_code', 'chapter_code_example')]
        response = self.client.open(
            '/ponxosio/YoungResGamePlay/1.0.0/chapterStartScene/',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_saved_variables_get(self):
        """Test case for saved_variables_get

        Returns the value stored on a game variable named variableName if possible
        """
        query_string = [('student_code', 'student_code_example'),
                        ('game_code', 'game_code_example'),
                        ('version', 'version_example'),
                        ('variable_name', 'variable_name_example')]
        response = self.client.open(
            '/ponxosio/YoungResGamePlay/1.0.0/savedVariables/',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_saved_variables_post(self):
        """Test case for saved_variables_post

        Store/Update a variable with variableName and value value if possible. If the user has no saved state for a specific game a new saved state must be generated.
        """
        query_string = [('student_code', 'student_code_example'),
                        ('game_code', 'game_code_example'),
                        ('version', 'version_example'),
                        ('variable_name', 'variable_name_example'),
                        ('value', 'value_example')]
        response = self.client.open(
            '/ponxosio/YoungResGamePlay/1.0.0/savedVariables/',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_store_decision_post(self):
        """Test case for store_decision_post

        Store/Update a new user decision related to the event eventCode with the variables data  into the database.
        """
        query_string = [('student_code', 'student_code_example'),
                        ('event_code', 'event_code_example')]
        headers = [('decision', Decision())]
        response = self.client.open(
            '/ponxosio/YoungResGamePlay/1.0.0/storeDecision/',
            method='POST',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
