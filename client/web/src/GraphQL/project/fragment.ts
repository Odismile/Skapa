import gql from 'graphql-tag';

export const PROJECTS_INFO_FRAGMENT = gql`
  fragment ProjectsInfo on createProjectPayload {
    project {
      id
      Name
      description
    }
  }
`;
