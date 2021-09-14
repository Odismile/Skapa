/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectInfo
// ====================================================

export interface ProjectInfo_project_skills_item {
  __typename: "Items";
  label: string | null;
}

export interface ProjectInfo_project_skills {
  __typename: "ProjectSkills";
  id: string;
  item: ProjectInfo_project_skills_item | null;
}

export interface ProjectInfo_project_favorits_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface ProjectInfo_project_favorits_profile {
  __typename: "Profiles";
  id: string;
  users_id: ProjectInfo_project_favorits_profile_users_id | null;
}

export interface ProjectInfo_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  profile: ProjectInfo_project_favorits_profile | null;
}

export interface ProjectInfo_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface ProjectInfo_profile {
  __typename: "Profiles";
  id: string;
  users_id: ProjectInfo_profile_users_id | null;
}

export interface ProjectInfo_contributes_profile_id {
  __typename: "Profiles";
  id: string;
  wallet: number | null;
  currentBalance: number | null;
}

export interface ProjectInfo_contributes {
  __typename: "Contributes";
  id: string;
  value: number | null;
  profile_id: ProjectInfo_contributes_profile_id | null;
}

export interface ProjectInfo_teams_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface ProjectInfo_teams_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  users_id: ProjectInfo_teams_profile_users_id | null;
}

export interface ProjectInfo_teams {
  __typename: "Teams";
  id: string;
  profile: ProjectInfo_teams_profile | null;
}

export interface ProjectInfo {
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
  project_skills: (ProjectInfo_project_skills | null)[] | null;
  project_favorits: (ProjectInfo_project_favorits | null)[] | null;
  profile: ProjectInfo_profile | null;
  contributes: (ProjectInfo_contributes | null)[] | null;
  teams: (ProjectInfo_teams | null)[] | null;
}
