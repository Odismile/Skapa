import gql from 'graphql-tag';
import { PROFILS_INFO_FRAGMENT } from './fragment';

export const CREATE_PROFIL = gql`
  mutation createProfile($input: createProfileInput!) {
    createProfile(input: $input) {
      ...ProfilsInfo
    }
  }
  ${PROFILS_INFO_FRAGMENT}
`;

export const CREATE_MY_PROFIL = gql`
  mutation ProfileCustomizeMeInput($input: profileCustomizeMeInput!) {
    profileCustomizeMeInput(input: $input) {
      profile {
        id
        bio
        picture
        video
      }
    }
  }
`;
