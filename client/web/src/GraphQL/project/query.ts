import gql from 'graphql-tag';
import { PROJECT_INFO_FRAGMENT } from './fragment';

export const PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      ...ProjectInfo
    }
  }
  ${PROJECT_INFO_FRAGMENT}
`;
