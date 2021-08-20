/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createBookInput } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateBook
// ====================================================

export interface CreateBook_createBook_book {
  __typename: "Books";
  id: string;
}

export interface CreateBook_createBook {
  __typename: "createBookPayload";
  book: CreateBook_createBook_book | null;
}

export interface CreateBook {
  createBook: CreateBook_createBook | null;
}

export interface CreateBookVariables {
  input?: createBookInput | null;
}
