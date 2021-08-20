/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: MeInfo
// ====================================================

export interface MeInfo_user {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
}

export interface MeInfo {
  user: MeInfo_user | null;
}

export interface MeInfoVariables {
  id: string;
  publicationState?: PublicationState | null;
}
