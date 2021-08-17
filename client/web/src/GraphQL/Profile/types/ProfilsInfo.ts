/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfilsInfo
// ====================================================

export interface ProfilsInfo_profile {
  __typename: "Profiles";
  id: string;
  position: string | null;
  bio: string | null;
}

export interface ProfilsInfo {
  __typename: "createProfilePayload";
  profile: ProfilsInfo_profile | null;
}
