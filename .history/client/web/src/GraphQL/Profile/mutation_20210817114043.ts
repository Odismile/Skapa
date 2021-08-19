import gql from 'graphql-tag';
import { PROJECTS_INFO_FRAGMENT } from './fragment';

export const CREATE_PROFILE = gql`
  mutation createProfile($input: createProjectInput!) {
    createProject(input: $input) {
      ...ProjectsInfo
    }
  }
  ${PROJECTS_INFO_FRAGMENT}
`;