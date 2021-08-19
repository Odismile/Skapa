import gql from 'graphql-tag';
import { PROFILES_INFO_FRAGMENT } from './fragment';

export const PROFILE = gql`
  query profile($id: ID!) {
    profile(id: $id) {
      ...ProfiletInfo
    }
  }
  ${PROFILES_INFO_FRAGMENT}
`;
