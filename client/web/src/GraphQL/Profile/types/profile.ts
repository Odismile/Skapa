/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: profile
// ====================================================

export interface profile_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface profile_profile_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface profile_profile_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface profile_profile_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: profile_profile_profile_skills_skill_id | null;
}

export interface profile_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  bio: string | null;
  position: string | null;
  users_id: profile_profile_users_id | null;
  job_seniority_id: profile_profile_job_seniority_id | null;
  profile_skills: (profile_profile_profile_skills | null)[] | null;
  video: string | null;
}

export interface profile {
  profile: profile_profile | null;
}

export interface profileVariables {
  id: string;
  publicationState?: PublicationState | null;
}
