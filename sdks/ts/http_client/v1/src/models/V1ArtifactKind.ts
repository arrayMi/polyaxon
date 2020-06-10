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

/**
 * - model: model  - audio: audio  - video: vidio  - histogram: histogram  - image: image  - tensor: tensor  - dataframe: dataframe  - chart: plotly/bokeh/vega chart  - csv: Comma  - tsv: Tab  - psv: Pipe  - ssv: Space  - metric: Metric  - env: Env  - html: HTML  - text: Text  - file: File  - dir: Dir  - dockerfile: Dockerfile  - docker_image: docker image  - data: data  - coderef: coderef  - table: table  - tensorboard: tensorboard  - curve: curve
 * @export
 * @enum {string}
 */
export enum V1ArtifactKind {
    Model = 'model',
    Audio = 'audio',
    Video = 'video',
    Histogram = 'histogram',
    Image = 'image',
    Tensor = 'tensor',
    Dataframe = 'dataframe',
    Chart = 'chart',
    Csv = 'csv',
    Tsv = 'tsv',
    Psv = 'psv',
    Ssv = 'ssv',
    Metric = 'metric',
    Env = 'env',
    Html = 'html',
    Text = 'text',
    File = 'file',
    Dir = 'dir',
    Dockerfile = 'dockerfile',
    DockerImage = 'docker_image',
    Data = 'data',
    Coderef = 'coderef',
    Table = 'table',
    Tensorboard = 'tensorboard',
    Curve = 'curve'
}

export function V1ArtifactKindFromJSON(json: any): V1ArtifactKind {
    return V1ArtifactKindFromJSONTyped(json, false);
}

export function V1ArtifactKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ArtifactKind {
    return json as V1ArtifactKind;
}

export function V1ArtifactKindToJSON(value?: V1ArtifactKind | null): any {
    return value as any;
}

