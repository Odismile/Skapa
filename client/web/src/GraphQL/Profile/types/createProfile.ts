/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProfileInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createProfile
// ====================================================

export interface createProfile_createProfile_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface createProfile_createProfile_profile_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface createProfile_createProfile_profile_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface createProfile_createProfile_profile_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: createProfile_createProfile_profile_profile_skills_skill_id | null;
}

export interface createProfile_createProfile_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  bio: string | null;
  position: string | null;
  users_id: createProfile_createProfile_profile_users_id | null;
  job_seniority_id: createProfile_createProfile_profile_job_seniority_id | null;
  profile_skills: (createProfile_createProfile_profile_profile_skills | null)[] | null;
  video: string | null;
}

export interface createProfile_createProfile {
  __typename: "createProfilePayload";
  profile: createProfile_createProfile_profile | null;
}

export interface createProfile {
  createProfile: createProfile_createProfile | null;
}

export interface createProfileVariables {
  input: createProfileInput;
}
