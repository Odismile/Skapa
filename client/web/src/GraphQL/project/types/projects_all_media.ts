/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projects_all_media
// ====================================================

export interface projects_all_media_projects {
  __typename: "Projects";
  id: string;
  Picture: string | null;
  Video: string | null;
}

export interface projects_all_media {
  projects: (projects_all_media_projects | null)[] | null;
}
