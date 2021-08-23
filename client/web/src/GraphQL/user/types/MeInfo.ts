/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeInfo
// ====================================================

export interface MeInfo_getProfile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
  isFirstConnection: boolean | null;
}

export interface MeInfo_getProfile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: MeInfo_getProfile_users_id | null;
}

export interface MeInfo {
  getProfile: MeInfo_getProfile | null;
}

export interface MeInfoVariables {
  userId?: number | null;
}
