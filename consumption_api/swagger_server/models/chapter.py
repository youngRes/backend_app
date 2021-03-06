# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Chapter(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, chapter_code: str=None, chapter_description: str=None, highlights: List[str]=None, snapshot: str=None):  # noqa: E501
        """Chapter - a model defined in Swagger

        :param chapter_code: The chapter_code of this Chapter.  # noqa: E501
        :type chapter_code: str
        :param chapter_description: The chapter_description of this Chapter.  # noqa: E501
        :type chapter_description: str
        :param highlights: The highlights of this Chapter.  # noqa: E501
        :type highlights: List[str]
        :param snapshot: The snapshot of this Chapter.  # noqa: E501
        :type snapshot: str
        """
        self.swagger_types = {
            'chapter_code': str,
            'chapter_description': str,
            'highlights': List[str],
            'snapshot': str
        }

        self.attribute_map = {
            'chapter_code': 'chapterCode',
            'chapter_description': 'chapterDescription',
            'highlights': 'highlights',
            'snapshot': 'snapshot'
        }
        self._chapter_code = chapter_code
        self._chapter_description = chapter_description
        self._highlights = highlights
        self._snapshot = snapshot

    @classmethod
    def from_dict(cls, dikt) -> 'Chapter':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Chapter of this Chapter.  # noqa: E501
        :rtype: Chapter
        """
        return util.deserialize_model(dikt, cls)

    @property
    def chapter_code(self) -> str:
        """Gets the chapter_code of this Chapter.

        code that identifies a chapter inside a video game.  # noqa: E501

        :return: The chapter_code of this Chapter.
        :rtype: str
        """
        return self._chapter_code

    @chapter_code.setter
    def chapter_code(self, chapter_code: str):
        """Sets the chapter_code of this Chapter.

        code that identifies a chapter inside a video game.  # noqa: E501

        :param chapter_code: The chapter_code of this Chapter.
        :type chapter_code: str
        """

        self._chapter_code = chapter_code

    @property
    def chapter_description(self) -> str:
        """Gets the chapter_description of this Chapter.

        short description of a chapter.  # noqa: E501

        :return: The chapter_description of this Chapter.
        :rtype: str
        """
        return self._chapter_description

    @chapter_description.setter
    def chapter_description(self, chapter_description: str):
        """Sets the chapter_description of this Chapter.

        short description of a chapter.  # noqa: E501

        :param chapter_description: The chapter_description of this Chapter.
        :type chapter_description: str
        """

        self._chapter_description = chapter_description

    @property
    def highlights(self) -> List[str]:
        """Gets the highlights of this Chapter.

        Tips for the teachers to understand what the results obtained can means  # noqa: E501

        :return: The highlights of this Chapter.
        :rtype: List[str]
        """
        return self._highlights

    @highlights.setter
    def highlights(self, highlights: List[str]):
        """Sets the highlights of this Chapter.

        Tips for the teachers to understand what the results obtained can means  # noqa: E501

        :param highlights: The highlights of this Chapter.
        :type highlights: List[str]
        """

        self._highlights = highlights

    @property
    def snapshot(self) -> str:
        """Gets the snapshot of this Chapter.

        url where the picture of the snapshot of the cahpter is stored  # noqa: E501

        :return: The snapshot of this Chapter.
        :rtype: str
        """
        return self._snapshot

    @snapshot.setter
    def snapshot(self, snapshot: str):
        """Sets the snapshot of this Chapter.

        url where the picture of the snapshot of the cahpter is stored  # noqa: E501

        :param snapshot: The snapshot of this Chapter.
        :type snapshot: str
        """

        self._snapshot = snapshot
