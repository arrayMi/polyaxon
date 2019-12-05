#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
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

    OpenAPI spec version: 1.0.0
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class V1Mounts(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        "secrets": "list[V1K8sMount]",
        "config_maps": "list[V1K8sMount]",
        "artifacts": "list[V1ArtifactMount]",
    }

    attribute_map = {
        "secrets": "secrets",
        "config_maps": "config_maps",
        "artifacts": "artifacts",
    }

    def __init__(self, secrets=None, config_maps=None, artifacts=None):  # noqa: E501
        """V1Mounts - a model defined in Swagger"""  # noqa: E501

        self._secrets = None
        self._config_maps = None
        self._artifacts = None
        self.discriminator = None

        if secrets is not None:
            self.secrets = secrets
        if config_maps is not None:
            self.config_maps = config_maps
        if artifacts is not None:
            self.artifacts = artifacts

    @property
    def secrets(self):
        """Gets the secrets of this V1Mounts.  # noqa: E501


        :return: The secrets of this V1Mounts.  # noqa: E501
        :rtype: list[V1K8sMount]
        """
        return self._secrets

    @secrets.setter
    def secrets(self, secrets):
        """Sets the secrets of this V1Mounts.


        :param secrets: The secrets of this V1Mounts.  # noqa: E501
        :type: list[V1K8sMount]
        """

        self._secrets = secrets

    @property
    def config_maps(self):
        """Gets the config_maps of this V1Mounts.  # noqa: E501


        :return: The config_maps of this V1Mounts.  # noqa: E501
        :rtype: list[V1K8sMount]
        """
        return self._config_maps

    @config_maps.setter
    def config_maps(self, config_maps):
        """Sets the config_maps of this V1Mounts.


        :param config_maps: The config_maps of this V1Mounts.  # noqa: E501
        :type: list[V1K8sMount]
        """

        self._config_maps = config_maps

    @property
    def artifacts(self):
        """Gets the artifacts of this V1Mounts.  # noqa: E501


        :return: The artifacts of this V1Mounts.  # noqa: E501
        :rtype: list[V1ArtifactMount]
        """
        return self._artifacts

    @artifacts.setter
    def artifacts(self, artifacts):
        """Sets the artifacts of this V1Mounts.


        :param artifacts: The artifacts of this V1Mounts.  # noqa: E501
        :type: list[V1ArtifactMount]
        """

        self._artifacts = artifacts

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
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
        if issubclass(V1Mounts, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Mounts):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
