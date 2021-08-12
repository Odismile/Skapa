import gql from 'graphql-tag';
import { ITEMS_FRAGMENT } from './fragment';

export const ITEM = gql`
  query Item($id: ID!, $publicationState: PublicationState) {
    item(id: $id, publicationState: $publicationState) {
      ...fragmentInfo
    }
  }
  ${ITEMS_FRAGMENT}
`;

export const ITEMS = gql`
  query Items($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
    items(sort: $sort, limit: $limit, start: $start, where: $where, publicationState: $publicationState) {
      ...fragmentInfo
    }
  }
  ${ITEMS_FRAGMENT}
`;

export const ITEMS_GET_LANGUAGE = gql`
  query Items_get_language($where: JSON) {
    items(sort: $sort, limit: $limit, start: $start, where: $where) {
      ...fragmentInfo
    }
  }
  ${ITEMS_FRAGMENT}
`;

export const ITEMS_CONNECTION = gql`
  query itemsConnection($sort: String, $limit: Int, $start: Int, $where: JSON) {
    itemsConnection(sort: $sort, limit: $limit, start: $start, where: $where) {
      values {
        id
      }
    }
  }
`;
