import gql from 'graphql-tag';
import { COACH_INFO_FRAGMENT, COACH_INFO_PICTURE_FRAGMENT } from './fragment';

export const LIST_COACH = gql`
  query coachs($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
    profiles(sort: $sort, limit: $limit, start: $start, where: $where, publicationState: $publicationState) {
      ...CoachInfo
    }
  }
  ${COACH_INFO_FRAGMENT}
`;

export const LIST_COACH_ALL_PICTURE = gql`
  query coachs_all_pictures {
    profiles {
      ...CoachPictureInfo
    }
  }
  ${COACH_INFO_PICTURE_FRAGMENT}
`;

export const LIST_COACH_ALL = gql`
  query coachs_all {
    profiles {
      ...CoachInfo
    }
  }
  ${COACH_INFO_FRAGMENT}
`;
