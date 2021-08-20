/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: profiles
// ====================================================

export interface profiles_profiles_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface profiles_profiles_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface profiles_profiles_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface profiles_profiles_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: profiles_profiles_profile_skills_skill_id | null;
}

export interface profiles_profiles {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  bio: string | null;
  position: string | null;
  users_id: profiles_profiles_users_id | null;
  job_seniority_id: profiles_profiles_job_seniority_id | null;
  profile_skills: (profiles_profiles_profile_skills | null)[] | null;
  video: string | null;
}

export interface profiles {
  profiles: (profiles_profiles | null)[] | null;
}

export interface profilesVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  publicationState?: PublicationState | null;
}
