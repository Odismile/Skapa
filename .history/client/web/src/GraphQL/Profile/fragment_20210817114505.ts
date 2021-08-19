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
  fragment ProjectsInfo on createProjectPayload {
    project {
      ...ProjectInfo
    }
  }
  ${PROJECT_INFO_FRAGMENT}
`;