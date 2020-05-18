# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Group(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, group_id: str=None, description: str=None):  # noqa: E501
        """Group - a model defined in Swagger

        :param group_id: The group_id of this Group.  # noqa: E501
        :type group_id: str
        :param description: The description of this Group.  # noqa: E501
        :type description: str
        """
        self.swagger_types = {
            'group_id': str,
            'description': str
        }

        self.attribute_map = {
            'group_id': 'group_id',
            'description': 'description'
        }
        self._group_id = group_id
        self._description = description

    @classmethod
    def from_dict(cls, dikt) -> 'Group':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Group of this Group.  # noqa: E501
        :rtype: Group
        """
        return util.deserialize_model(dikt, cls)

    @property
    def group_id(self) -> str:
        """Gets the group_id of this Group.


        :return: The group_id of this Group.
        :rtype: str
        """
        return self._group_id

    @group_id.setter
    def group_id(self, group_id: str):
        """Sets the group_id of this Group.


        :param group_id: The group_id of this Group.
        :type group_id: str
        """

        self._group_id = group_id

    @property
    def description(self) -> str:
        """Gets the description of this Group.


        :return: The description of this Group.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description: str):
        """Sets the description of this Group.


        :param description: The description of this Group.
        :type description: str
        """

        self._description = description
