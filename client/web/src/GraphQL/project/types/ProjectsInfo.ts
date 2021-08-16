/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProjectsInfo
// ====================================================

export interface ProjectsInfo_project_project_skills {
  __typename: "ProjectSkills";
  id: string;
  name: string;
}

export interface ProjectsInfo_project {
  __typename: "Projects";
  id: string;
  Name: string | null;
  description: string;
  project_skills: (ProjectsInfo_project_project_skills | null)[] | null;
}

export interface ProjectsInfo {
  __typename: "createProjectPayload";
  project: ProjectsInfo_project | null;
}
