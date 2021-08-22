/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: coachs
// ====================================================

export interface coachs_profiles_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface coachs_profiles_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
}

export interface coachs_profiles_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface coachs_profiles_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: coachs_profiles_profile_skills_skill_id | null;
}

export interface coachs_profiles_project_favorits_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface coachs_profiles_project_favorits_profile {
  __typename: "Profiles";
  id: string;
  users_id: coachs_profiles_project_favorits_profile_users_id | null;
}

export interface coachs_profiles_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
  profile: coachs_profiles_project_favorits_profile | null;
}

export interface coachs_profiles_talent_favorits_profile {
  __typename: "Profiles";
  id: string;
}

export interface coachs_profiles_talent_favorits {
  __typename: "TalentFavorits";
  id: string;
  profile: coachs_profiles_talent_favorits_profile | null;
}

export interface coachs_profiles_languages {
  __typename: "Languages";
  id: string;
}

export interface coachs_profiles_profile_type_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface coachs_profiles_projects {
  __typename: "Projects";
  id: string;
}

export interface coachs_profiles {
  __typename: "Profiles";
  id: string;
  position: string | null;
  picture: string | null;
  job_seniority_id: coachs_profiles_job_seniority_id | null;
  users_id: coachs_profiles_users_id | null;
  published_at: any | null;
  profile_skills: (coachs_profiles_profile_skills | null)[] | null;
  project_favorits: (coachs_profiles_project_favorits | null)[] | null;
  talent_favorits: (coachs_profiles_talent_favorits | null)[] | null;
  languages: (coachs_profiles_languages | null)[] | null;
  profile_type_id: coachs_profiles_profile_type_id | null;
  projects: (coachs_profiles_projects | null)[] | null;
}

export interface coachs {
  profiles: (coachs_profiles | null)[] | null;
}

export interface coachsVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  publicationState?: PublicationState | null;
}
