/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsLoginInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface Login_login {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: Login_login_user;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input: UsersPermissionsLoginInput;
}
