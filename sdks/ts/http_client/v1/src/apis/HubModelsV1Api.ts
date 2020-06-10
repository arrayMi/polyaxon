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


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1HubModel,
    V1HubModelFromJSON,
    V1HubModelToJSON,
    V1ListHubModelsResponse,
    V1ListHubModelsResponseFromJSON,
    V1ListHubModelsResponseToJSON,
} from '../models';

export interface CreateHubModelRequest {
    owner: string;
    body: V1HubModel;
}

export interface DeleteHubModelRequest {
    owner: string;
    uuid: string;
}

export interface GetHubModelRequest {
    owner: string;
    uuid: string;
}

export interface ListHubModelNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListHubModelsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchHubModelRequest {
    owner: string;
    modelUuid: string;
    body: V1HubModel;
}

export interface UpdateHubModelRequest {
    owner: string;
    modelUuid: string;
    body: V1HubModel;
}

/**
 * Polyaxon sdk
 */
export class HubModelsV1Api extends runtime.BaseAPI {

    /**
     * Create hub model
     */
    async createHubModelRaw(requestParameters: CreateHubModelRequest): Promise<runtime.ApiResponse<V1HubModel>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createHubModel.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createHubModel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubModelToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubModelFromJSON(jsonValue));
    }

    /**
     * Create hub model
     */
    async createHubModel(requestParameters: CreateHubModelRequest): Promise<V1HubModel> {
        const response = await this.createHubModelRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete hub model
     */
    async deleteHubModelRaw(requestParameters: DeleteHubModelRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteHubModel.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteHubModel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete hub model
     */
    async deleteHubModel(requestParameters: DeleteHubModelRequest): Promise<void> {
        await this.deleteHubModelRaw(requestParameters);
    }

    /**
     * Get hub model
     */
    async getHubModelRaw(requestParameters: GetHubModelRequest): Promise<runtime.ApiResponse<V1HubModel>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getHubModel.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getHubModel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubModelFromJSON(jsonValue));
    }

    /**
     * Get hub model
     */
    async getHubModel(requestParameters: GetHubModelRequest): Promise<V1HubModel> {
        const response = await this.getHubModelRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub model names
     */
    async listHubModelNamesRaw(requestParameters: ListHubModelNamesRequest): Promise<runtime.ApiResponse<V1ListHubModelsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listHubModelNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListHubModelsResponseFromJSON(jsonValue));
    }

    /**
     * List hub model names
     */
    async listHubModelNames(requestParameters: ListHubModelNamesRequest): Promise<V1ListHubModelsResponse> {
        const response = await this.listHubModelNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub models
     */
    async listHubModelsRaw(requestParameters: ListHubModelsRequest): Promise<runtime.ApiResponse<V1ListHubModelsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listHubModels.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListHubModelsResponseFromJSON(jsonValue));
    }

    /**
     * List hub models
     */
    async listHubModels(requestParameters: ListHubModelsRequest): Promise<V1ListHubModelsResponse> {
        const response = await this.listHubModelsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch hub model
     */
    async patchHubModelRaw(requestParameters: PatchHubModelRequest): Promise<runtime.ApiResponse<V1HubModel>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchHubModel.');
        }

        if (requestParameters.modelUuid === null || requestParameters.modelUuid === undefined) {
            throw new runtime.RequiredError('modelUuid','Required parameter requestParameters.modelUuid was null or undefined when calling patchHubModel.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchHubModel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models/{model.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"model.uuid"}}`, encodeURIComponent(String(requestParameters.modelUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubModelToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubModelFromJSON(jsonValue));
    }

    /**
     * Patch hub model
     */
    async patchHubModel(requestParameters: PatchHubModelRequest): Promise<V1HubModel> {
        const response = await this.patchHubModelRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update hub model
     */
    async updateHubModelRaw(requestParameters: UpdateHubModelRequest): Promise<runtime.ApiResponse<V1HubModel>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateHubModel.');
        }

        if (requestParameters.modelUuid === null || requestParameters.modelUuid === undefined) {
            throw new runtime.RequiredError('modelUuid','Required parameter requestParameters.modelUuid was null or undefined when calling updateHubModel.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateHubModel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/models/{model.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"model.uuid"}}`, encodeURIComponent(String(requestParameters.modelUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubModelToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubModelFromJSON(jsonValue));
    }

    /**
     * Update hub model
     */
    async updateHubModel(requestParameters: UpdateHubModelRequest): Promise<V1HubModel> {
        const response = await this.updateHubModelRaw(requestParameters);
        return await response.value();
    }

}
