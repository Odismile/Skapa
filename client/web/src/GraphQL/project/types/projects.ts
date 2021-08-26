/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projects
// ====================================================

export interface projects_projects_project_skills_item {
  __typename: "Items";
  label: string | null;
}

export interface projects_projects_project_skills {
  __typename: "ProjectSkills";
  id: string;
  item: projects_projects_project_skills_item | null;
}

export interface projects_projects_project_favorits_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface projects_projects_project_favorits_profile {
  __typename: "Profiles";
  id: string;
  users_id: projects_projects_project_favorits_profile_users_id | null;
}

export interface projects_projects_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  profile: projects_projects_project_favorits_profile | null;
}

export interface projects_projects_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface projects_projects_profile {
  __typename: "Profiles";
  id: string;
  users_id: projects_projects_profile_users_id | null;
}

export interface projects_projects_contributes_profile_id {
  __typename: "Profiles";
  id: string;
}

export interface projects_projects_contributes {
  __typename: "Contributes";
  id: string;
  value: number | null;
  profile_id: projects_projects_contributes_profile_id | null;
}

export interface projects_projects {
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
  project_skills: (projects_projects_project_skills | null)[] | null;
  project_favorits: (projects_projects_project_favorits | null)[] | null;
  profile: projects_projects_profile | null;
  contributes: (projects_projects_contributes | null)[] | null;
}

export interface projects {
  projects: (projects_projects | null)[] | null;
}

export interface projectsVariables {
  where?: any | null;
}
