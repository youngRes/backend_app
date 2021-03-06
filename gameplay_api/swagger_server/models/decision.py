# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.field import Field  # noqa: F401,E501
from swagger_server import util


class Decision(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, decision: List[Field]=None):  # noqa: E501
        """Decision - a model defined in Swagger

        :param decision: The decision of this Decision.  # noqa: E501
        :type decision: List[Field]
        """
        self.swagger_types = {
            'decision': List[Field]
        }

        self.attribute_map = {
            'decision': 'decision'
        }
        self._decision = decision

    @classmethod
    def from_dict(cls, dikt) -> 'Decision':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Decision of this Decision.  # noqa: E501
        :rtype: Decision
        """
        return util.deserialize_model(dikt, cls)

    @property
    def decision(self) -> List[Field]:
        """Gets the decision of this Decision.


        :return: The decision of this Decision.
        :rtype: List[Field]
        """
        return self._decision

    @decision.setter
    def decision(self, decision: List[Field]):
        """Sets the decision of this Decision.


        :param decision: The decision of this Decision.
        :type decision: List[Field]
        """

        self._decision = decision
