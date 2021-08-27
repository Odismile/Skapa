/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectsInfo
// ====================================================

export interface ProjectsInfo_project_project_skills_item {
  __typename: "Items";
  label: string | null;
}

export interface ProjectsInfo_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  item: ProjectsInfo_project_project_skills_item | null;
}

export interface ProjectsInfo_project_project_favorits_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface ProjectsInfo_project_project_favorits_profile {
  __typename: "Profiles";
  id: string;
  users_id: ProjectsInfo_project_project_favorits_profile_users_id | null;
}

export interface ProjectsInfo_project_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  profile: ProjectsInfo_project_project_favorits_profile | null;
}

export interface ProjectsInfo_project_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface ProjectsInfo_project_profile {
  __typename: "Profiles";
  id: string;
  users_id: ProjectsInfo_project_profile_users_id | null;
}

export interface ProjectsInfo_project_contributes_profile_id {
  __typename: "Profiles";
  id: string;
  wallet: number | null;
  currentBalance: number | null;
}

export interface ProjectsInfo_project_contributes {
  __typename: "Contributes";
  id: string;
  value: number | null;
  profile_id: ProjectsInfo_project_contributes_profile_id | null;
}

export interface ProjectsInfo_project {
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
  project_skills: (ProjectsInfo_project_project_skills | null)[] | null;
  project_favorits: (ProjectsInfo_project_project_favorits | null)[] | null;
  profile: ProjectsInfo_project_profile | null;
  contributes: (ProjectsInfo_project_contributes | null)[] | null;
}

export interface ProjectsInfo {
  __typename: "createProjectPayload";
  project: ProjectsInfo_project | null;
}
