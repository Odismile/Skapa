/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: profiles
// ====================================================

export interface profiles_profiles {
  __typename: "Profiles";
}

export interface profiles {
  profiles: (profiles_profiles | null)[] | null;
}

export interface profilesVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  publicationState?: PublicationState | null;
}
