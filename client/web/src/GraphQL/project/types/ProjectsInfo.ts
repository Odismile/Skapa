/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectsInfo
// ====================================================

export interface ProjectsInfo_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
}

export interface ProjectsInfo {
  __typename: "createProjectPayload";
  project: ProjectsInfo_project | null;
}
