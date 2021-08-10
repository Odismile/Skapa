/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserPermissionMeInfo
// ====================================================

export interface UserPermissionMeInfo_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface UserPermissionMeInfo {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: UserPermissionMeInfo_role | null;
}
