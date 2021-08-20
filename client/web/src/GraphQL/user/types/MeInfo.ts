/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeInfo
// ====================================================

export interface MeInfo_profiles_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
  isFirstConnection: boolean | null;
}

export interface MeInfo_profiles {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: MeInfo_profiles_users_id | null;
}

export interface MeInfo {
  profiles: (MeInfo_profiles | null)[] | null;
}

export interface MeInfoVariables {
  where?: any | null;
}
