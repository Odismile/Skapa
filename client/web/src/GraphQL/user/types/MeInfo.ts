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

export interface MeInfo_getProfile_contributes {
  __typename: "Contributes";
  id: string;
  value: number | null;
}

export interface MeInfo_getProfile_talent_favorits {
  __typename: "TalentFavorits";
  id: string;
  talent_id: string | null;
  coach_id: string | null;
}

export interface MeInfo_getProfile_project_favorits_project {
  __typename: "Projects";
  id: string;
}

export interface MeInfo_getProfile_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  project: MeInfo_getProfile_project_favorits_project | null;
}

export interface MeInfo_getProfile {
  __typename: "Profiles";
  id: string;
  position: string | null;
  picture: string | null;
  wallet: number | null;
  currentBalance: number | null;
  users_id: MeInfo_getProfile_users_id | null;
  contributes: (MeInfo_getProfile_contributes | null)[] | null;
  talent_favorits: (MeInfo_getProfile_talent_favorits | null)[] | null;
  project_favorits: (MeInfo_getProfile_project_favorits | null)[] | null;
}

export interface MeInfo {
  getProfile: MeInfo_getProfile | null;
}

export interface MeInfoVariables {
  userId?: number | null;
}
