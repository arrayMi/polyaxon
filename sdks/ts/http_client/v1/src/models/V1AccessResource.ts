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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1AccessResource
 */
export interface V1AccessResource {
    /**
     * 
     * @type {string}
     * @memberof V1AccessResource
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AccessResource
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AccessResource
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1AccessResource
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof V1AccessResource
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1AccessResource
     */
    updated_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1AccessResource
     */
    kind?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1AccessResource
     */
    frozen?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1AccessResource
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1AccessResource
     */
    deleted?: boolean;
}

export function V1AccessResourceFromJSON(json: any): V1AccessResource {
    return V1AccessResourceFromJSONTyped(json, false);
}

export function V1AccessResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AccessResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'frozen': !exists(json, 'frozen') ? undefined : json['frozen'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
    };
}

export function V1AccessResourceToJSON(value?: V1AccessResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'kind': value.kind,
        'frozen': value.frozen,
        'disabled': value.disabled,
        'deleted': value.deleted,
    };
}


