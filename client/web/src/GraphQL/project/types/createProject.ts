/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProjectInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProject
// ====================================================

export interface createProject_createProject_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  name: string;
}

export interface createProject_createProject_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
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
