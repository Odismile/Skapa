/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createAppointmentInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createAppointment
// ====================================================

export interface createAppointment_createAppointment_appointment {
  __typename: "Appointments";
  id: string;
}

export interface createAppointment_createAppointment {
  __typename: "createAppointmentPayload";
  appointment: createAppointment_createAppointment_appointment | null;
}

export interface createAppointment {
  createAppointment: createAppointment_createAppointment | null;
}

export interface createAppointmentVariables {
  input?: createAppointmentInput | null;
}
