/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createTeamInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateTeam
// ====================================================

export interface CreateTeam_createTeam_team {
  __typename: "Teams";
  id: string;
}

export interface CreateTeam_createTeam {
  __typename: "createTeamPayload";
  team: CreateTeam_createTeam_team | null;
}

export interface CreateTeam {
  createTeam: CreateTeam_createTeam | null;
}

export interface CreateTeamVariables {
  input?: createTeamInput | null;
}
