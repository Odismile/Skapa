/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_LANGUAGES_LEVEL {
  BASIC = "BASIC",
  FLUENT = "FLUENT",
  INTERMEDIATE = "INTERMEDIATE",
}

export enum Level {
  BASIC = "BASIC",
  FLUENT = "FLUENT",
  INTERMEDIATE = "INTERMEDIATE",
}

export enum PublicationState {
  LIVE = "LIVE",
  PREVIEW = "PREVIEW",
}

export interface AppointmentInput {
  coach?: string | null;
  start?: any | null;
  time?: string | null;
  talent?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface ContributeInput {
  value?: number | null;
  project_id?: string | null;
  profile_id?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface InputID {
  id: string;
}

export interface ProfileInput {
  position?: string | null;
  bio?: string | null;
  picture?: string | null;
  video?: string | null;
  job_seniority_id?: string | null;
  users_id?: string | null;
  profile_skills?: (string | null)[] | null;
  talent_favorits?: (string | null)[] | null;
  project_favorits?: (string | null)[] | null;
  languages?: (string | null)[] | null;
  projects?: (string | null)[] | null;
  profile_type_id?: string | null;
  contributes?: (string | null)[] | null;
  profile_project_types?: (string | null)[] | null;
  wallet?: number | null;
  currentBalance?: number | null;
  appointments?: (string | null)[] | null;
  appointmentTalents?: (string | null)[] | null;
  teams?: (string | null)[] | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface ProjectFavoritInput {
  profile?: string | null;
  project?: string | null;
  status?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface ProjectInput {
  Name?: string | null;
  teams?: (string | null)[] | null;
  description: string;
  item?: string | null;
  project_skills?: (string | null)[] | null;
  Picture?: string | null;
  Type?: string | null;
  Ville?: string | null;
  Video?: string | null;
  status?: string | null;
  profile?: string | null;
  project_favorits?: (string | null)[] | null;
  organisation?: string | null;
  Date_start?: any | null;
  Date_end?: any | null;
  contributes?: (string | null)[] | null;
  isExternalVideo?: boolean | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface TalentFavoritInput {
  profile?: string | null;
  coach_id?: string | null;
  talent_id?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface TeamInput {
  name?: string | null;
  project?: string | null;
  profile?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UsersPermissionsLoginInput {
  identifier: string;
  password: string;
  provider?: string | null;
}

export interface UsersPermissionsRegisterCustomInput {
  username: string;
  email: string;
  password: string;
  surname?: string | null;
  lastname?: string | null;
}

export interface createAppointmentInput {
  data?: AppointmentInput | null;
}

export interface createContributeInput {
  data?: ContributeInput | null;
}

export interface createProfileInput {
  data?: ProfileInput | null;
}

export interface createProjectFavoritInput {
  data?: ProjectFavoritInput | null;
}

export interface createProjectInput {
  data?: ProjectInput | null;
}

export interface createTalentFavoritInput {
  data?: TalentFavoritInput | null;
}

export interface createTeamInput {
  data?: TeamInput | null;
}

export interface deleteTeamInput {
  where?: InputID | null;
}

export interface editProjectFavoritInput {
  profile?: string | null;
  project?: string | null;
  status?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface editProjectInput {
  Name?: string | null;
  teams?: (string | null)[] | null;
  description?: string | null;
  item?: string | null;
  project_skills?: (string | null)[] | null;
  Picture?: string | null;
  Type?: string | null;
  Ville?: string | null;
  Video?: string | null;
  status?: string | null;
  profile?: string | null;
  project_favorits?: (string | null)[] | null;
  organisation?: string | null;
  Date_start?: any | null;
  Date_end?: any | null;
  contributes?: (string | null)[] | null;
  isExternalVideo?: boolean | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface editUserInput {
  username?: string | null;
  email?: string | null;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  surname?: string | null;
  lastname?: string | null;
  languages?: (string | null)[] | null;
  isFirstConnection?: boolean | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface languages {
  id: string;
  level?: Level | null;
}

export interface profileCustomizeMeInput {
  bio?: string | null;
  picture?: string | null;
  video?: string | null;
  position?: string | null;
  job_seniority?: string | null;
  languages?: (languages | null)[] | null;
  projects?: string[] | null;
  profile_skills?: string[] | null;
  user_id?: string | null;
  wallet?: number | null;
}

export interface updateProjectFavoritInput {
  where?: InputID | null;
  data?: editProjectFavoritInput | null;
}

export interface updateProjectInput {
  where?: InputID | null;
  data?: editProjectInput | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
