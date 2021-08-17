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

export interface ProjectInfo {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
  project_skills: (ProjectInfo_project_skills | null)[] | null;
}
