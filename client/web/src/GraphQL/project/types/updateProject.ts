/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateProjectInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: updateProject
// ====================================================

export interface updateProject_updateProject_project_project_skills_item {
  __typename: "Items";
  label: string | null;
}

export interface updateProject_updateProject_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  item: updateProject_updateProject_project_project_skills_item | null;
}

export interface updateProject_updateProject_project_project_favorits_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface updateProject_updateProject_project_project_favorits_profile {
  __typename: "Profiles";
  id: string;
  users_id: updateProject_updateProject_project_project_favorits_profile_users_id | null;
}

export interface updateProject_updateProject_project_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  profile: updateProject_updateProject_project_project_favorits_profile | null;
}

export interface updateProject_updateProject_project_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface updateProject_updateProject_project_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: updateProject_updateProject_project_profile_users_id | null;
}

export interface updateProject_updateProject_project_contributes_profile_id {
  __typename: "Profiles";
  id: string;
  wallet: number | null;
  currentBalance: number | null;
}

export interface updateProject_updateProject_project_contributes {
  __typename: "Contributes";
  id: string;
  value: number | null;
  profile_id: updateProject_updateProject_project_contributes_profile_id | null;
}

export interface updateProject_updateProject_project_teams_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface updateProject_updateProject_project_teams_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: updateProject_updateProject_project_teams_profile_users_id | null;
}

export interface updateProject_updateProject_project_teams {
  __typename: "Teams";
  id: string;
  profile: updateProject_updateProject_project_teams_profile | null;
}

export interface updateProject_updateProject_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
  Picture: string | null;
  Video: string | null;
  Type: string | null;
  Date_start: any | null;
  Date_end: any | null;
  created_at: any;
  project_skills: (updateProject_updateProject_project_project_skills | null)[] | null;
  project_favorits: (updateProject_updateProject_project_project_favorits | null)[] | null;
  profile: updateProject_updateProject_project_profile | null;
  contributes: (updateProject_updateProject_project_contributes | null)[] | null;
  teams: (updateProject_updateProject_project_teams | null)[] | null;
}

export interface updateProject_updateProject {
  __typename: "updateProjectPayload";
  project: updateProject_updateProject_project | null;
}

export interface updateProject {
  updateProject: updateProject_updateProject | null;
}

export interface updateProjectVariables {
  input?: updateProjectInput | null;
}
