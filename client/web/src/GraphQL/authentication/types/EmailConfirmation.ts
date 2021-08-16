/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EmailConfirmation
// ====================================================

export interface EmailConfirmation_registerCustom_user_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface EmailConfirmation_registerCustom_user {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: EmailConfirmation_registerCustom_user_role | null;
}

export interface EmailConfirmation_registerCustom {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: EmailConfirmation_registerCustom_user;
}

export interface EmailConfirmation {
  registerCustom: EmailConfirmation_registerCustom;
}

export interface EmailConfirmationVariables {
  confirmation: string;
}
