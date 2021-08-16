/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
}

export interface project {
  project: project_project | null;
}

export interface projectVariables {
  id: string;
}
