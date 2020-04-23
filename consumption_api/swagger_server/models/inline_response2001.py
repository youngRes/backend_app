# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.filter import Filter  # noqa: F401,E501
from swagger_server import util


class InlineResponse2001(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, filters: List[Filter]=None):  # noqa: E501
        """InlineResponse2001 - a model defined in Swagger

        :param filters: The filters of this InlineResponse2001.  # noqa: E501
        :type filters: List[Filter]
        """
        self.swagger_types = {
            'filters': List[Filter]
        }

        self.attribute_map = {
            'filters': 'filters'
        }
        self._filters = filters

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2001':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_1 of this InlineResponse2001.  # noqa: E501
        :rtype: InlineResponse2001
        """
        return util.deserialize_model(dikt, cls)

    @property
    def filters(self) -> List[Filter]:
        """Gets the filters of this InlineResponse2001.


        :return: The filters of this InlineResponse2001.
        :rtype: List[Filter]
        """
        return self._filters

    @filters.setter
    def filters(self, filters: List[Filter]):
        """Sets the filters of this InlineResponse2001.


        :param filters: The filters of this InlineResponse2001.
        :type filters: List[Filter]
        """

        self._filters = filters
