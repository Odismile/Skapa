/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteItemInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: DeleteItem
// ====================================================

export interface DeleteItem_deleteItem_item {
  __typename: "Items";
  id: string;
}

export interface DeleteItem_deleteItem {
  __typename: "deleteItemPayload";
  item: DeleteItem_deleteItem_item | null;
}

export interface DeleteItem {
  deleteItem: DeleteItem_deleteItem | null;
}

export interface DeleteItemVariables {
  input?: deleteItemInput | null;
}
