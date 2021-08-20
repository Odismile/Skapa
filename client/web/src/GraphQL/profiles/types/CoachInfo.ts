/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoachInfo
// ====================================================

export interface CoachInfo_job_seniority_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface CoachInfo_users_id {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  surname: string | null;
  lastname: string | null;
  email: string;
}

export interface CoachInfo_profile_skills_skill_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface CoachInfo_profile_skills {
  __typename: "ProfileSkills";
  id: string;
  skill_id: CoachInfo_profile_skills_skill_id | null;
}

export interface CoachInfo_talent_favorits {
  __typename: "TalentFavorits";
  id: string;
}

export interface CoachInfo_project_favorits {
  __typename: "ProjectFavorits";
  id: string;
}

export interface CoachInfo_languages {
  __typename: "Languages";
  id: string;
}

export interface CoachInfo_profile_type_id {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface CoachInfo_projects {
  __typename: "Projects";
  id: string;
}

export interface CoachInfo {
  __typename: "Profiles";
  id: string;
  position: string | null;
  picture: string | null;
  job_seniority_id: CoachInfo_job_seniority_id | null;
  users_id: CoachInfo_users_id | null;
  published_at: any | null;
  profile_skills: (CoachInfo_profile_skills | null)[] | null;
  talent_favorits: (CoachInfo_talent_favorits | null)[] | null;
  project_favorits: (CoachInfo_project_favorits | null)[] | null;
  languages: (CoachInfo_languages | null)[] | null;
  profile_type_id: CoachInfo_profile_type_id | null;
  projects: (CoachInfo_projects | null)[] | null;
}
