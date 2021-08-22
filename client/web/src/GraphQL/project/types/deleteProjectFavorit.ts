/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteProjectFavoritInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: deleteProjectFavorit
// ====================================================

export interface deleteProjectFavorit_deleteProjectFavorit_projectFavorit {
  __typename: "ProjectFavorits";
  id: string;
}

export interface deleteProjectFavorit_deleteProjectFavorit {
  __typename: "deleteProjectFavoritPayload";
  projectFavorit: deleteProjectFavorit_deleteProjectFavorit_projectFavorit | null;
}

export interface deleteProjectFavorit {
  deleteProjectFavorit: deleteProjectFavorit_deleteProjectFavorit | null;
}

export interface deleteProjectFavoritVariables {
  input?: deleteProjectFavoritInput | null;
}
