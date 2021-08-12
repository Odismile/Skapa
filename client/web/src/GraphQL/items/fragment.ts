import gql from 'graphql-tag';

export const ITEMS_FRAGMENT = gql`
  fragment fragmentInfo on Items {
    id
    label
  }
`;
