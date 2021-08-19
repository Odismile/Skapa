/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_LANGUAGES_LEVEL } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL fragment: CoachInfo
// ====================================================

export interface CoachInfo_job_seniority_id {
  __typename: "Items";
  id: string;
}

export interface CoachInfo_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface CoachInfo_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  created_at: any;
  published_at: any | null;
}

export interface CoachInfo_talent_favorits {
  __typename: "TalentFavorits";
  id: string;
  created_at: any;
  published_at: any | null;
}

export interface CoachInfo_project_favorits_project {
  __typename: "Projects";
  id: string;
  created_at: any;
  Name: string | null;
  description: string;
}

export interface CoachInfo_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  created_at: any;
  project: CoachInfo_project_favorits_project | null;
}

export interface CoachInfo_languages_language {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface CoachInfo_languages {
  __typename: "Languages";
  id: string;
  level: ENUM_LANGUAGES_LEVEL | null;
  language: CoachInfo_languages_language | null;
  published_at: any | null;
}

export interface CoachInfo_projects {
  __typename: "Projects";
  id: string;
}

export interface CoachInfo {
  __typename: "Profiles";
  id: string;
  created_at: any;
  updated_at: any;
  position: string | null;
  bio: string | null;
  picture: string | null;
  video: string | null;
  job_seniority_id: CoachInfo_job_seniority_id | null;
  users_id: CoachInfo_users_id | null;
  published_at: any | null;
  profile_skills: (CoachInfo_profile_skills | null)[] | null;
  talent_favorits: (CoachInfo_talent_favorits | null)[] | null;
  project_favorits: (CoachInfo_project_favorits | null)[] | null;
  languages: (CoachInfo_languages | null)[] | null;
  projects: (CoachInfo_projects | null)[] | null;
}
