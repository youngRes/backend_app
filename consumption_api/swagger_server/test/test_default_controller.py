# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.chapter import Chapter  # noqa: E501
from swagger_server.models.event import Event  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server.models.inline_response2002 import InlineResponse2002  # noqa: E501
from swagger_server.models.inline_response2003 import InlineResponse2003  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_decision_get(self):
        """Test case for decision_get

        returns decisions taken by students. Has several filter options.
        """
        query_string = [('game_code', 'game_code_example'),
                        ('game_version', 'game_version_example'),
                        ('chapter_code', 'chapter_code_example')]
        headers = [('', null())]
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/decision',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_descriptions_chapter_get(self):
        """Test case for descriptions_chapter_get

        returns information about the available games.
        """
        query_string = [('game_code', 'game_code_example'),
                        ('game_version', 'game_version_example'),
                        ('chapter_code', 'chapter_code_example')]
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/descriptions/chapter',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_descriptions_event_get(self):
        """Test case for descriptions_event_get

        returns information about events inside the video game.
        """
        query_string = [('game_code', 'game_code_example'),
                        ('game_version', 'game_version_example'),
                        ('chapter_code', 'chapter_code_example'),
                        ('event_code', 'event_code_example')]
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/descriptions/event',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_descriptions_games_get(self):
        """Test case for descriptions_games_get

        returns information about the available games.
        """
        query_string = [('limit', 20),
                        ('page', 0)]
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/descriptions/games',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_filters_group_get(self):
        """Test case for filters_group_get

        returns information related to the possible filters that can be apply to the groups. Each field contains the name, the type (numeric, textual) and all the values associated to that field (without repetition).
        """
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/filters/group',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_filters_student_get(self):
        """Test case for filters_student_get

        returns information related to the possible filters that can be apply to the students. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).
        """
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/filters/student',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_filters_test_get(self):
        """Test case for filters_test_get

        returns information related to the possible filters that can be apply to the test. Each field contains the name, the type (numeric, textual) and all the values associated to that filter (without repetition).
        """
        response = self.client.open(
            '/ponxosio/data_comsuption_api/1.0.0/filters/test',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
