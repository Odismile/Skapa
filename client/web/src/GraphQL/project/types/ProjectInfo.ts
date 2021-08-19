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

export interface ProjectInfo_profile {
  __typename: "Profiles";
  id: string;
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
  profile: ProjectInfo_profile | null;
}
