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

export const PROJECTS_INFO_FRAGMENT = gql`
  fragment ProfileInfo on createProjectPayload {
    project {
      ...ProjectInfo
    }
  }
  ${PROFILE_INFO_FRAGMENT}
`;