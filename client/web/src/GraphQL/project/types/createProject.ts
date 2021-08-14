/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProjectInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProject
// ====================================================

export interface createProject_createProject_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
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
