/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteTalentFavoritInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: deleteTalentFavorit
// ====================================================

export interface deleteTalentFavorit_deleteTalentFavorit_talentFavorit {
  __typename: "TalentFavorits";
  id: string;
}

export interface deleteTalentFavorit_deleteTalentFavorit {
  __typename: "deleteTalentFavoritPayload";
  talentFavorit: deleteTalentFavorit_deleteTalentFavorit_talentFavorit | null;
}

export interface deleteTalentFavorit {
  deleteTalentFavorit: deleteTalentFavorit_deleteTalentFavorit | null;
}

export interface deleteTalentFavoritVariables {
  input?: deleteTalentFavoritInput | null;
}
