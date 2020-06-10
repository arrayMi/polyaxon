// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.96
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1OrganizationMember model module.
 * @module model/V1OrganizationMember
 * @version 1.0.96
 */
class V1OrganizationMember {
    /**
     * Constructs a new <code>V1OrganizationMember</code>.
     * @alias module:model/V1OrganizationMember
     */
    constructor() { 
        
        V1OrganizationMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1OrganizationMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1OrganizationMember} obj Optional instance to populate.
     * @return {module:model/V1OrganizationMember} The populated <code>V1OrganizationMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1OrganizationMember();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('user_email')) {
                obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user
 */
V1OrganizationMember.prototype['user'] = undefined;

/**
 * @member {String} user_email
 */
V1OrganizationMember.prototype['user_email'] = undefined;

/**
 * @member {String} email
 */
V1OrganizationMember.prototype['email'] = undefined;

/**
 * @member {String} role
 */
V1OrganizationMember.prototype['role'] = undefined;

/**
 * @member {Date} created_at
 */
V1OrganizationMember.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1OrganizationMember.prototype['updated_at'] = undefined;






export default V1OrganizationMember;

