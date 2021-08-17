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
