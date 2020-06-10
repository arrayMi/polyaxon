#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.0.96
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1ConnectionType(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        "name": "str",
        "description": "str",
        "kind": "V1ConnectionKind",
        "schema": "object",
        "secret": "V1K8sResourceSchema",
        "config_map": "V1K8sResourceSchema",
    }

    attribute_map = {
        "name": "name",
        "description": "description",
        "kind": "kind",
        "schema": "schema",
        "secret": "secret",
        "config_map": "config_map",
    }

    def __init__(
        self,
        name=None,
        description=None,
        kind=None,
        schema=None,
        secret=None,
        config_map=None,
        local_vars_configuration=None,
    ):  # noqa: E501
        """V1ConnectionType - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._name = None
        self._description = None
        self._kind = None
        self._schema = None
        self._secret = None
        self._config_map = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if description is not None:
            self.description = description
        if kind is not None:
            self.kind = kind
        if schema is not None:
            self.schema = schema
        if secret is not None:
            self.secret = secret
        if config_map is not None:
            self.config_map = config_map

    @property
    def name(self):
        """Gets the name of this V1ConnectionType.  # noqa: E501


        :return: The name of this V1ConnectionType.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1ConnectionType.


        :param name: The name of this V1ConnectionType.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def description(self):
        """Gets the description of this V1ConnectionType.  # noqa: E501


        :return: The description of this V1ConnectionType.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this V1ConnectionType.


        :param description: The description of this V1ConnectionType.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def kind(self):
        """Gets the kind of this V1ConnectionType.  # noqa: E501


        :return: The kind of this V1ConnectionType.  # noqa: E501
        :rtype: V1ConnectionKind
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1ConnectionType.


        :param kind: The kind of this V1ConnectionType.  # noqa: E501
        :type: V1ConnectionKind
        """

        self._kind = kind

    @property
    def schema(self):
        """Gets the schema of this V1ConnectionType.  # noqa: E501


        :return: The schema of this V1ConnectionType.  # noqa: E501
        :rtype: object
        """
        return self._schema

    @schema.setter
    def schema(self, schema):
        """Sets the schema of this V1ConnectionType.


        :param schema: The schema of this V1ConnectionType.  # noqa: E501
        :type: object
        """

        self._schema = schema

    @property
    def secret(self):
        """Gets the secret of this V1ConnectionType.  # noqa: E501


        :return: The secret of this V1ConnectionType.  # noqa: E501
        :rtype: V1K8sResourceSchema
        """
        return self._secret

    @secret.setter
    def secret(self, secret):
        """Sets the secret of this V1ConnectionType.


        :param secret: The secret of this V1ConnectionType.  # noqa: E501
        :type: V1K8sResourceSchema
        """

        self._secret = secret

    @property
    def config_map(self):
        """Gets the config_map of this V1ConnectionType.  # noqa: E501


        :return: The config_map of this V1ConnectionType.  # noqa: E501
        :rtype: V1K8sResourceSchema
        """
        return self._config_map

    @config_map.setter
    def config_map(self, config_map):
        """Sets the config_map of this V1ConnectionType.


        :param config_map: The config_map of this V1ConnectionType.  # noqa: E501
        :type: V1K8sResourceSchema
        """

        self._config_map = config_map

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1ConnectionType):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1ConnectionType):
            return True

        return self.to_dict() != other.to_dict()
