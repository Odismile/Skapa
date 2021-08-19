/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateProjectFavoritInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: updateProjectFavorit
// ====================================================

export interface updateProjectFavorit_updateProjectFavorit_projectFavorit {
  __typename: "ProjectFavorits";
  id: string;
}

export interface updateProjectFavorit_updateProjectFavorit {
  __typename: "updateProjectFavoritPayload";
  projectFavorit: updateProjectFavorit_updateProjectFavorit_projectFavorit | null;
}

export interface updateProjectFavorit {
  updateProjectFavorit: updateProjectFavorit_updateProjectFavorit | null;
}

export interface updateProjectFavoritVariables {
  input?: updateProjectFavoritInput | null;
}
