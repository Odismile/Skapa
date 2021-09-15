/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteTeamInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: DeleteTeam
// ====================================================

export interface DeleteTeam_deleteTeam_team {
  __typename: "Teams";
  id: string;
}

export interface DeleteTeam_deleteTeam {
  __typename: "deleteTeamPayload";
  team: DeleteTeam_deleteTeam_team | null;
}

export interface DeleteTeam {
  deleteTeam: DeleteTeam_deleteTeam | null;
}

export interface DeleteTeamVariables {
  input?: deleteTeamInput | null;
}
