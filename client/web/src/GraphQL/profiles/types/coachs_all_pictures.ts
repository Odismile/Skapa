/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: coachs_all_pictures
// ====================================================

export interface coachs_all_pictures_profiles {
  __typename: "Profiles";
  id: string;
  picture: string | null;
}

export interface coachs_all_pictures {
  profiles: (coachs_all_pictures_profiles | null)[] | null;
}
