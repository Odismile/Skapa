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
