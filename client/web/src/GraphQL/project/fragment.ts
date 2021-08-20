import gql from 'graphql-tag';

export const PROJECT_INFO_FRAGMENT = gql`
  fragment ProjectInfo on Projects {
    id
    Name
    description
    Picture
    Video
    Type
    Date_start
    Date_end
    created_at
    project_skills {
      id
      item {
        label
      }
    }
    profile {
      id
      users_id {
        id
        lastname
        surname
      }
    }
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
