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

export const PROFILE_INFO_FRAGMENT = gql`
  fragment ProfileInfo on createProfilePayload {
    project {
      ...ProjectInfo
    }
  }
  ${PROFILE_INFO_FRAGMENT}
`;