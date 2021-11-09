/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: checkmail
// ====================================================

export interface checkmail_checkEmailProfile {
  __typename: "Profiles";
  id: string;
}

export interface checkmail {
  checkEmailProfile: checkmail_checkEmailProfile | null;
}

export interface checkmailVariables {
  email: string;
}
