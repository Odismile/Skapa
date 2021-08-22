/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfilsInfo
// ====================================================

export interface ProfilsInfo_profile_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  lastname: string | null;
  surname: string | null;
}

export interface ProfilsInfo_profile_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface ProfilsInfo_profile_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface ProfilsInfo_profile_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: ProfilsInfo_profile_profile_skills_skill_id | null;
}

export interface ProfilsInfo_profile {
  __typename: "Profiles";
  id: string;
  picture: string | null;
  bio: string | null;
  position: string | null;
  users_id: ProfilsInfo_profile_users_id | null;
  job_seniority_id: ProfilsInfo_profile_job_seniority_id | null;
  profile_skills: (ProfilsInfo_profile_profile_skills | null)[] | null;
  video: string | null;
}

export interface ProfilsInfo {
  __typename: "createProfilePayload";
  profile: ProfilsInfo_profile | null;
}
