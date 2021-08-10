/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsRegisterInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register_user_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface Register_register_user {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: Register_register_user_role | null;
}

export interface Register_register {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: Register_register_user;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  input: UsersPermissionsRegisterInput;
}
