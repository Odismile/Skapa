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
  isFirstConnection?: boolean | null;
}

export interface createProjectInput {
  data?: ProjectInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
