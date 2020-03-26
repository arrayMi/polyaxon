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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Event Event spec definition
//
// swagger:model v1Event
type V1Event struct {

	// artifact
	Artifact *V1EventArtifact `json:"artifact,omitempty"`

	// audio
	Audio *V1EventAudio `json:"audio,omitempty"`

	// chart
	Chart *V1EventChart `json:"chart,omitempty"`

	// dataframe
	Dataframe *V1EventDataframe `json:"dataframe,omitempty"`

	// histogram
	Histogram *V1EventHistogram `json:"histogram,omitempty"`

	// html
	HTML string `json:"html,omitempty"`

	// image
	Image *V1EventImage `json:"image,omitempty"`

	// metric
	Metric float32 `json:"metric,omitempty"`

	// model
	Model *V1EventModel `json:"model,omitempty"`

	// Global step of the event.
	Step int32 `json:"step,omitempty"`

	// text
	Text string `json:"text,omitempty"`

	// Optional time when the entity was created
	// Format: date-time
	Timestamp strfmt.DateTime `json:"timestamp,omitempty"`

	// video
	Video *V1EventVideo `json:"video,omitempty"`
}

// Validate validates this v1 event
func (m *V1Event) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateArtifact(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateAudio(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateChart(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDataframe(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateHistogram(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateImage(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateModel(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTimestamp(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVideo(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Event) validateArtifact(formats strfmt.Registry) error {

	if swag.IsZero(m.Artifact) { // not required
		return nil
	}

	if m.Artifact != nil {
		if err := m.Artifact.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifact")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateAudio(formats strfmt.Registry) error {

	if swag.IsZero(m.Audio) { // not required
		return nil
	}

	if m.Audio != nil {
		if err := m.Audio.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("audio")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateChart(formats strfmt.Registry) error {

	if swag.IsZero(m.Chart) { // not required
		return nil
	}

	if m.Chart != nil {
		if err := m.Chart.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("chart")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateDataframe(formats strfmt.Registry) error {

	if swag.IsZero(m.Dataframe) { // not required
		return nil
	}

	if m.Dataframe != nil {
		if err := m.Dataframe.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("dataframe")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateHistogram(formats strfmt.Registry) error {

	if swag.IsZero(m.Histogram) { // not required
		return nil
	}

	if m.Histogram != nil {
		if err := m.Histogram.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("histogram")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateImage(formats strfmt.Registry) error {

	if swag.IsZero(m.Image) { // not required
		return nil
	}

	if m.Image != nil {
		if err := m.Image.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("image")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateModel(formats strfmt.Registry) error {

	if swag.IsZero(m.Model) { // not required
		return nil
	}

	if m.Model != nil {
		if err := m.Model.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("model")
			}
			return err
		}
	}

	return nil
}

func (m *V1Event) validateTimestamp(formats strfmt.Registry) error {

	if swag.IsZero(m.Timestamp) { // not required
		return nil
	}

	if err := validate.FormatOf("timestamp", "body", "date-time", m.Timestamp.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1Event) validateVideo(formats strfmt.Registry) error {

	if swag.IsZero(m.Video) { // not required
		return nil
	}

	if m.Video != nil {
		if err := m.Video.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("video")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Event) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Event) UnmarshalBinary(b []byte) error {
	var res V1Event
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}