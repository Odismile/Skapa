/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicationState } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: Item
// ====================================================

export interface Item_item {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface Item {
  item: Item_item | null;
}

export interface ItemVariables {
  id: string;
  publicationState?: PublicationState | null;
}
