import gql from 'graphql-tag';
//import { PROFILES_INFO_FRAGMENT } from './fragment';

export const CREATE_PROFILE = gql`
  mutation CreateProfile($input: createProfileInput!) {
    createProfile(input: $input) {
      Profile{
          bio
          position
      }
    }
  }
 
`;