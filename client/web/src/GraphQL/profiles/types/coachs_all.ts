/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: coachs_all
// ====================================================

export interface coachs_all_profiles_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface coachs_all_profiles_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
}

export interface coachs_all_profiles_profile_skills {
  __typename: "ProfileSkills";
  id: string;
}

export interface coachs_all_profiles_talent_favorits {
  __typename: "TalentFavorits";
  id: string;
}

export interface coachs_all_profiles_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
}

export interface coachs_all_profiles_languages {
  __typename: "Languages";
  id: string;
}

export interface coachs_all_profiles_profile_type_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface coachs_all_profiles_projects {
  __typename: "Projects";
  id: string;
}

export interface coachs_all_profiles {
  __typename: "Profiles";
  id: string;
  position: string | null;
  picture: string | null;
  job_seniority_id: coachs_all_profiles_job_seniority_id | null;
  users_id: coachs_all_profiles_users_id | null;
  published_at: any | null;
  profile_skills: (coachs_all_profiles_profile_skills | null)[] | null;
  talent_favorits: (coachs_all_profiles_talent_favorits | null)[] | null;
  project_favorits: (coachs_all_profiles_project_favorits | null)[] | null;
  languages: (coachs_all_profiles_languages | null)[] | null;
  profile_type_id: coachs_all_profiles_profile_type_id | null;
  projects: (coachs_all_profiles_projects | null)[] | null;
}

export interface coachs_all {
  profiles: (coachs_all_profiles | null)[] | null;
}
