/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: MeInfo
// ====================================================

export interface MeInfo_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
  isFirstConnection: boolean | null;
}

export interface MeInfo_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: MeInfo_profile_users_id | null;
}

export interface MeInfo {
  profile: MeInfo_profile | null;
}

export interface MeInfoVariables {
  id: string;
  publicationState?: PublicationState | null;
}
