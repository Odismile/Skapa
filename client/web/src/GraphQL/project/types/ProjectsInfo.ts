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

export interface ProjectsInfo_project_profile {
  __typename: "Profiles";
  id: string;
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
  profile: ProjectsInfo_project_profile | null;
}

export interface ProjectsInfo {
  __typename: "createProjectPayload";
  project: ProjectsInfo_project | null;
}
