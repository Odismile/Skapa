/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: Items
// ====================================================

export interface Items_items {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface Items {
  items: (Items_items | null)[] | null;
}

export interface ItemsVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  publicationState?: PublicationState | null;
}
