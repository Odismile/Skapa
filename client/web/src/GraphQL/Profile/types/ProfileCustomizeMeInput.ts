/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { profileCustomizeMeInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: ProfileCustomizeMeInput
// ====================================================

export interface ProfileCustomizeMeInput_profileCustomizeMeInput_profile {
  __typename: "ProfileCustomizeMe";
  id: string;
  bio: string | null;
  picture: string | null;
  video: string | null;
}

export interface ProfileCustomizeMeInput_profileCustomizeMeInput {
  __typename: "profileCustomizePayload";
  profile: ProfileCustomizeMeInput_profileCustomizeMeInput_profile | null;
}

export interface ProfileCustomizeMeInput {
  profileCustomizeMeInput: ProfileCustomizeMeInput_profileCustomizeMeInput;
}

export interface ProfileCustomizeMeInputVariables {
  input: profileCustomizeMeInput;
}
