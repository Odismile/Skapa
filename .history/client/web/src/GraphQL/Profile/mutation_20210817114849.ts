import gql from 'graphql-tag';
import { PROFILES_INFO_FRAGMENT } from './fragment';

export const CREATE_PROFILE = gql`
  mutation createProfile($input: createProjectInput!) {
    createProject(input: $input) {
      ...ProjectsInfo
    }
  }
  ${PROFILES_INFO_FRAGMENT}
`;