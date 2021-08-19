/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProjectFavoritInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProjectFavorit
// ====================================================

export interface createProjectFavorit_createProjectFavorit_projectFavorit {
  __typename: "ProjectFavorits";
  id: string;
}

export interface createProjectFavorit_createProjectFavorit {
  __typename: "createProjectFavoritPayload";
  projectFavorit: createProjectFavorit_createProjectFavorit_projectFavorit | null;
}

export interface createProjectFavorit {
  createProjectFavorit: createProjectFavorit_createProjectFavorit | null;
}

export interface createProjectFavoritVariables {
  input?: createProjectFavoritInput | null;
}
