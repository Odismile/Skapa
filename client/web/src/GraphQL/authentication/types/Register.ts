/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsRegisterCustomInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_registerCustom_user_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface Register_registerCustom_user {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: Register_registerCustom_user_role | null;
}

export interface Register_registerCustom {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: Register_registerCustom_user;
}

export interface Register {
  registerCustom: Register_registerCustom;
}

export interface RegisterVariables {
  input: UsersPermissionsRegisterCustomInput;
}
