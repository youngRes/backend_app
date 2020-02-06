# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.decision import Decision  # noqa: F401,E501
from swagger_server.models.entry_list import EntryList  # noqa: F401,E501
from swagger_server import util


class Event(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, event_code: str=None, event_description: str=None, event_type: str=None, parent_decision: Decision=None, possible_choices: List[EntryList]=None):  # noqa: E501
        """Event - a model defined in Swagger

        :param event_code: The event_code of this Event.  # noqa: E501
        :type event_code: str
        :param event_description: The event_description of this Event.  # noqa: E501
        :type event_description: str
        :param event_type: The event_type of this Event.  # noqa: E501
        :type event_type: str
        :param parent_decision: The parent_decision of this Event.  # noqa: E501
        :type parent_decision: Decision
        :param possible_choices: The possible_choices of this Event.  # noqa: E501
        :type possible_choices: List[EntryList]
        """
        self.swagger_types = {
            'event_code': str,
            'event_description': str,
            'event_type': str,
            'parent_decision': Decision,
            'possible_choices': List[EntryList]
        }

        self.attribute_map = {
            'event_code': 'eventCode',
            'event_description': 'eventDescription',
            'event_type': 'eventType',
            'parent_decision': 'parentDecision',
            'possible_choices': 'possibleChoices'
        }
        self._event_code = event_code
        self._event_description = event_description
        self._event_type = event_type
        self._parent_decision = parent_decision
        self._possible_choices = possible_choices

    @classmethod
    def from_dict(cls, dikt) -> 'Event':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Event of this Event.  # noqa: E501
        :rtype: Event
        """
        return util.deserialize_model(dikt, cls)

    @property
    def event_code(self) -> str:
        """Gets the event_code of this Event.

        code that uniquely identifies an event  # noqa: E501

        :return: The event_code of this Event.
        :rtype: str
        """
        return self._event_code

    @event_code.setter
    def event_code(self, event_code: str):
        """Sets the event_code of this Event.

        code that uniquely identifies an event  # noqa: E501

        :param event_code: The event_code of this Event.
        :type event_code: str
        """

        self._event_code = event_code

    @property
    def event_description(self) -> str:
        """Gets the event_description of this Event.

        short description of the event.  # noqa: E501

        :return: The event_description of this Event.
        :rtype: str
        """
        return self._event_description

    @event_description.setter
    def event_description(self, event_description: str):
        """Sets the event_description of this Event.

        short description of the event.  # noqa: E501

        :param event_description: The event_description of this Event.
        :type event_description: str
        """

        self._event_description = event_description

    @property
    def event_type(self) -> str:
        """Gets the event_type of this Event.

        type of  the event (multiple choice, timed ...etc)  # noqa: E501

        :return: The event_type of this Event.
        :rtype: str
        """
        return self._event_type

    @event_type.setter
    def event_type(self, event_type: str):
        """Sets the event_type of this Event.

        type of  the event (multiple choice, timed ...etc)  # noqa: E501

        :param event_type: The event_type of this Event.
        :type event_type: str
        """

        self._event_type = event_type

    @property
    def parent_decision(self) -> Decision:
        """Gets the parent_decision of this Event.


        :return: The parent_decision of this Event.
        :rtype: Decision
        """
        return self._parent_decision

    @parent_decision.setter
    def parent_decision(self, parent_decision: Decision):
        """Sets the parent_decision of this Event.


        :param parent_decision: The parent_decision of this Event.
        :type parent_decision: Decision
        """

        self._parent_decision = parent_decision

    @property
    def possible_choices(self) -> List[EntryList]:
        """Gets the possible_choices of this Event.

        dictionaries where the keys are attributes in the event and the values are all the possible choices. This dictionary changes depending on the type of event.  # noqa: E501

        :return: The possible_choices of this Event.
        :rtype: List[EntryList]
        """
        return self._possible_choices

    @possible_choices.setter
    def possible_choices(self, possible_choices: List[EntryList]):
        """Sets the possible_choices of this Event.

        dictionaries where the keys are attributes in the event and the values are all the possible choices. This dictionary changes depending on the type of event.  # noqa: E501

        :param possible_choices: The possible_choices of this Event.
        :type possible_choices: List[EntryList]
        """

        self._possible_choices = possible_choices