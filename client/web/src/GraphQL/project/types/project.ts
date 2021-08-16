/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  name: string;
}

export interface project_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
  project_skills: (project_project_project_skills | null)[] | null;
}

export interface project {
  project: project_project | null;
}

export interface projectVariables {
  id: string;
}
