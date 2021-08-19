import gql from 'graphql-tag';
import { PROFILE_INFO_FRAGMENT } from './fragment';

export const PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      ...ProjectInfo
    }
  }
  ${PROFILE_INFO_FRAGMENT}
`;
