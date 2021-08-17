/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsLoginInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_loginCustom_user_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface Login_loginCustom_user {
  __typename: "UsersPermissionsCustomizeMe";
  id: string;
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  isFirstConnection: boolean | null;
  role: Login_loginCustom_user_role | null;
}

export interface Login_loginCustom {
  __typename: "UsersPermissionsLoginCustomizePayload";
  jwt: string | null;
  user: Login_loginCustom_user;
}

export interface Login {
  loginCustom: Login_loginCustom;
}

export interface LoginVariables {
  input: UsersPermissionsLoginInput;
}
