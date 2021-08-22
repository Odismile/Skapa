/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfilInfo
// ====================================================

export interface ProfilInfo_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface ProfilInfo_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface ProfilInfo_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface ProfilInfo_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: ProfilInfo_profile_skills_skill_id | null;
}

export interface ProfilInfo {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  bio: string | null;
  position: string | null;
  users_id: ProfilInfo_users_id | null;
  job_seniority_id: ProfilInfo_job_seniority_id | null;
  profile_skills: (ProfilInfo_profile_skills | null)[] | null;
  video: string | null;
}
