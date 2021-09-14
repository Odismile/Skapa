import gql from 'graphql-tag';

export const PROJECT_INFO_FRAGMENT = gql`
  fragment ProjectInfo on Projects {
    id
    Name
    description
    Picture @client
    Video @client
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
    project_favorits {
      id
      profile {
        id
        users_id {
          id
        }
      }
    }
    profile {
      id
      picture @client
      users_id {
        id
        lastname
        surname
      }
    }
    contributes {
      id
      value
      profile_id {
        id
        wallet
        currentBalance
      }
    }
    teams { 
    	id
      profile { 
      	id
        picture @client
        users_id { 
          id
          lastname
          surname
        }
      }
    }
  }
`;
export const PROJECT_INFO_MEDIA_FRAGMENT = gql`
  fragment ProjectInfoMedia on Projects {
    id
    Picture
    Video
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
