import gql from 'graphql-tag';

export const PROFILE_INFO_FRAGMENT = gql`
  fragment ProfileInfo on Profile {
    id
    position
    bio
    picture
    video
  }
`;

export const PROFILES_INFO_FRAGMENT = gql`
  fragment ProfileInfo on createProfilePayload {
    profile {
      ...ProfileInfo
    }
  }
  ${PROFILE_INFO_FRAGMENT}
`;*/