/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createTalentFavoritInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createTalentFavorit
// ====================================================

export interface createTalentFavorit_createTalentFavorit_talentFavorit {
  __typename: "TalentFavorits";
  id: string;
}

export interface createTalentFavorit_createTalentFavorit {
  __typename: "createTalentFavoritPayload";
  talentFavorit: createTalentFavorit_createTalentFavorit_talentFavorit | null;
}

export interface createTalentFavorit {
  createTalentFavorit: createTalentFavorit_createTalentFavorit | null;
}

export interface createTalentFavoritVariables {
  input?: createTalentFavoritInput | null;
}
