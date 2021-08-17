/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PublicationState {
  LIVE = "LIVE",
  PREVIEW = "PREVIEW",
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
  Date_Start?: string | null;
  Date_End?: string | null;
  status?: string | null;
  profile?: string | null;
  project_favorits?: (string | null)[] | null;
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

export interface createProfileInput {
  data?: ProfileInput | null;
}

export interface createProjectInput {
  data?: ProjectInput | null;
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
  profile_project_types?: (string | null)[] | null;
  isFirstConnection?: boolean | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
