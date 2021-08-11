/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: itemsConnection
// ====================================================

export interface itemsConnection_itemsConnection_values {
  __typename: "Items";
  id: string;
}

export interface itemsConnection_itemsConnection {
  __typename: "ItemsConnection";
  values: (itemsConnection_itemsConnection_values | null)[] | null;
}

export interface itemsConnection {
  itemsConnection: itemsConnection_itemsConnection | null;
}

export interface itemsConnectionVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
}
