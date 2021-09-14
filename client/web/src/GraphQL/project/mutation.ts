import gql from 'graphql-tag';
import { PROJECTS_INFO_FRAGMENT, PROJECT_INFO_FRAGMENT } from './fragment';

export const CREATE_PROJECT = gql`
  mutation createProject($input: createProjectInput!) {
    createProject(input: $input) {
      ...ProjectsInfo
    }
  }
  ${PROJECTS_INFO_FRAGMENT}
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($input: updateProjectInput) {
    updateProject(input: $input) {
      project {
        ...ProjectInfo
      }
    }
  }
  ${PROJECT_INFO_FRAGMENT}
`;

export const CREATE_PROJECT_FAVORI = gql`
  mutation createProjectFavorit($input: createProjectFavoritInput) {
    createProjectFavorit(input: $input) {
      projectFavorit {
        id
      }
    }
  }
`;

export const DELETE_PROJECT_FAVORI = gql`
  mutation deleteProjectFavorit($projectId: Int, $profileId: Int) {
    deleteProjectFavorits(projectId: $projectId, profileId: $profileId)
  }
`;

export const UPDATE_PROJECT_FAVORI = gql`
  mutation updateProjectFavorit($input: updateProjectFavoritInput) {
    updateProjectFavorit(input: $input) {
      projectFavorit {
        id
      }
    }
  }
`;
export const ADD_TALENT_TO_PROJECT = gql`
  mutation CreateTeam($input: createTeamInput) {
    createTeam(input: $input) {
      team {
        id
      }
    }
  }
`;
export const REMOVE_TALENT_TO_PROJECT = gql`
  mutation DeleteItem($input: deleteItemInput) {
    deleteItem(input: $input) {
      item {
        id
      }
    }
  }
`;
