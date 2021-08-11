import gql from 'graphql-tag';

export const ITEM = gql`
  query Item($id: ID!, $publicationState: PublicationState) {
    item(id: $id, publicationState: $publicationState) {
      id
    }
  }
`;

export const ITEMS = gql`
  query Items($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
    items(sort: $sort, limit: $limit, start: $start, where: $where, publicationState: $publicationState) {
      id
    }
  }
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
