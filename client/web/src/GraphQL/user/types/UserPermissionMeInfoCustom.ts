/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserPermissionMeInfoCustom
// ====================================================

export interface UserPermissionMeInfoCustom_role {
  __typename: "UsersPermissionsMeRole";
  id: string;
  name: string;
  description: string | null;
  type: string | null;
}

export interface UserPermissionMeInfoCustom {
  __typename: "UsersPermissionsCustomizeMe";
  id: string;
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  isFirstConnection: boolean | null;
  role: UserPermissionMeInfoCustom_role | null;
}
