import gql from 'graphql-tag';
import { PROFILES_INFO_FRAGMENT } from './fragment';

export const PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      ...ProjectInfo
    }
  }
  ${PROFILES_INFO_FRAGMENT}
`;
