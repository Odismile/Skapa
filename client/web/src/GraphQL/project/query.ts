import gql from 'graphql-tag';
import { PROJECT_INFO_FRAGMENT } from './fragment';

export const PROJECTS = gql`
  query projects($where: JSON) {
    projects(where: $where) {
      ...ProjectInfo
    }
  }
  ${PROJECT_INFO_FRAGMENT}
`;

export const PROJECTS_ALL = gql`
  query projects_all {
    projects {
      ...ProjectInfo
    }
  }
  ${PROJECT_INFO_FRAGMENT}
`;
