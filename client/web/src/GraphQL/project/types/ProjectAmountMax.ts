/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectAmountMax
// ====================================================

export interface ProjectAmountMax_amounts {
  __typename: "Amounts";
  id: string;
  value: number | null;
}

export interface ProjectAmountMax {
  amounts: (ProjectAmountMax_amounts | null)[] | null;
}

export interface ProjectAmountMaxVariables {
  where?: any | null;
}
