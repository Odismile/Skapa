/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface Login_login_user {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: Login_login_user_role | null;
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
  username?: string | null;
  password?: string | null;
}
