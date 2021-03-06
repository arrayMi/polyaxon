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

// Code generated by go-swagger; DO NOT EDIT.

package access_resources_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListAccessResourceNamesReader is a Reader for the ListAccessResourceNames structure.
type ListAccessResourceNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListAccessResourceNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListAccessResourceNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListAccessResourceNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListAccessResourceNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListAccessResourceNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListAccessResourceNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListAccessResourceNamesOK creates a ListAccessResourceNamesOK with default headers values
func NewListAccessResourceNamesOK() *ListAccessResourceNamesOK {
	return &ListAccessResourceNamesOK{}
}

/*ListAccessResourceNamesOK handles this case with default header values.

A successful response.
*/
type ListAccessResourceNamesOK struct {
	Payload *service_model.V1ListAccessResourcesResponse
}

func (o *ListAccessResourceNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/access_resources/names][%d] listAccessResourceNamesOK  %+v", 200, o.Payload)
}

func (o *ListAccessResourceNamesOK) GetPayload() *service_model.V1ListAccessResourcesResponse {
	return o.Payload
}

func (o *ListAccessResourceNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListAccessResourcesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAccessResourceNamesNoContent creates a ListAccessResourceNamesNoContent with default headers values
func NewListAccessResourceNamesNoContent() *ListAccessResourceNamesNoContent {
	return &ListAccessResourceNamesNoContent{}
}

/*ListAccessResourceNamesNoContent handles this case with default header values.

No content.
*/
type ListAccessResourceNamesNoContent struct {
	Payload interface{}
}

func (o *ListAccessResourceNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/access_resources/names][%d] listAccessResourceNamesNoContent  %+v", 204, o.Payload)
}

func (o *ListAccessResourceNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAccessResourceNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAccessResourceNamesForbidden creates a ListAccessResourceNamesForbidden with default headers values
func NewListAccessResourceNamesForbidden() *ListAccessResourceNamesForbidden {
	return &ListAccessResourceNamesForbidden{}
}

/*ListAccessResourceNamesForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ListAccessResourceNamesForbidden struct {
	Payload interface{}
}

func (o *ListAccessResourceNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/access_resources/names][%d] listAccessResourceNamesForbidden  %+v", 403, o.Payload)
}

func (o *ListAccessResourceNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAccessResourceNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAccessResourceNamesNotFound creates a ListAccessResourceNamesNotFound with default headers values
func NewListAccessResourceNamesNotFound() *ListAccessResourceNamesNotFound {
	return &ListAccessResourceNamesNotFound{}
}

/*ListAccessResourceNamesNotFound handles this case with default header values.

Resource does not exist.
*/
type ListAccessResourceNamesNotFound struct {
	Payload interface{}
}

func (o *ListAccessResourceNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/access_resources/names][%d] listAccessResourceNamesNotFound  %+v", 404, o.Payload)
}

func (o *ListAccessResourceNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListAccessResourceNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListAccessResourceNamesDefault creates a ListAccessResourceNamesDefault with default headers values
func NewListAccessResourceNamesDefault(code int) *ListAccessResourceNamesDefault {
	return &ListAccessResourceNamesDefault{
		_statusCode: code,
	}
}

/*ListAccessResourceNamesDefault handles this case with default header values.

An unexpected error response
*/
type ListAccessResourceNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list access resource names default response
func (o *ListAccessResourceNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListAccessResourceNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/access_resources/names][%d] ListAccessResourceNames default  %+v", o._statusCode, o.Payload)
}

func (o *ListAccessResourceNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListAccessResourceNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
