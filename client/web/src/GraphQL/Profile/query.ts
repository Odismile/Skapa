import gql from 'graphql-tag';
import { PROFIL_INFO_FRAGMENT } from './fragment';

export const PROFILE = gql`
  query profile($id: ID!, $publicationState: PublicationState) {
    profile(id: $id, publicationState: $publicationState) {
      ...ProfilInfo
    }
  }
  ${PROFIL_INFO_FRAGMENT}
`;
