/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProjectInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProject
// ====================================================

export interface createProject_createProject_project_project_skills_item {
  __typename: "Items";
  label: string | null;
}

export interface createProject_createProject_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  item: createProject_createProject_project_project_skills_item | null;
}

export interface createProject_createProject_project {
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
  project_skills: (createProject_createProject_project_project_skills | null)[] | null;
}

export interface createProject_createProject {
  __typename: "createProjectPayload";
  project: createProject_createProject_project | null;
}

export interface createProject {
  createProject: createProject_createProject | null;
}

export interface createProjectVariables {
  input: createProjectInput;
}
