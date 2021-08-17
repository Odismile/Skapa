/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProfileInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProfile
// ====================================================

export interface createProfile_createProfile_profile {
  __typename: "Profiles";
  id: string;
  position: string | null;
  bio: string | null;
}

export interface createProfile_createProfile {
  __typename: "createProfilePayload";
  profile: createProfile_createProfile_profile | null;
}

export interface createProfile {
  createProfile: createProfile_createProfile | null;
}

export interface createProfileVariables {
  input: createProfileInput;
}
