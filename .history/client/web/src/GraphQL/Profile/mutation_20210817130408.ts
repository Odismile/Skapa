import gql from 'graphql-tag';
import { PROFILES_INFO_FRAGMENT } from './fragment';

export const CREATE_PROFILE = gql`
  mutation createProfile($input: createProfileInput!) {
    createProfile(input: $input) {
      ...ProfilesInfo
    }
  }
  ${PROFILES_INFO_FRAGMENT}
`;