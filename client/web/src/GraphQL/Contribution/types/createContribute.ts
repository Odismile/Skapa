/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createContributeInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createContribute
// ====================================================

export interface createContribute_createContribute_contribute {
  __typename: "Contributes";
  id: string;
}

export interface createContribute_createContribute {
  __typename: "createContributePayload";
  contribute: createContribute_createContribute_contribute | null;
}

export interface createContribute {
  createContribute: createContribute_createContribute | null;
}

export interface createContributeVariables {
  input?: createContributeInput | null;
}
