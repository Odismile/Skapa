/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Items_get_language
// ====================================================

export interface Items_get_language_items {
  __typename: "Items";
  id: string;
  label: string | null;
}

export interface Items_get_language {
  items: (Items_get_language_items | null)[] | null;
}

export interface Items_get_languageVariables {
  where?: any | null;
}
