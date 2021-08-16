import gql from 'graphql-tag';
import { PROJECTS_INFO_FRAGMENT } from './fragment';

export const CREATE_PROJECT = gql`
  mutation createProject($input: createProjectInput!) {
    createProject(input: $input) {
      ...ProjectsInfo
    }
  }
  ${PROJECTS_INFO_FRAGMENT}
`;
