import gql from 'graphql-tag';

export const PROJECT_INFO_FRAGMENT = gql`
  fragment ProjectInfo on Projects {
    id
    Name
    description
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
