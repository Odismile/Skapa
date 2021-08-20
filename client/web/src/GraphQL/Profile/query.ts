import gql from 'graphql-tag';
import { PROFIL_INFO_FRAGMENT } from './fragment';

export const PROFILES = gql`
  query profiles($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
    profiles(sort: $sort, limit: $limit, start: $start, where: $where, publicationState: $publicationState) {
      ...ProfilInfo
    }
  }
  ${PROFIL_INFO_FRAGMENT}
`;
