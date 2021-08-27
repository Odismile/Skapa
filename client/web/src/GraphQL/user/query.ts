import gql from 'graphql-tag';

export const ME_INFO = gql`
  query MeInfo($userId: Int) {
    getProfile(userId: $userId) {
      id
      picture
      users_id {
        id
        username
        surname
        lastname
        email
        isFirstConnection
      }
      contributes {
        id
        value
      }
      talent_favorits {
        id
        talent_id
        coach_id
      }
      project_favorits {
        id
        project {
          id
        }
      }
    }
  }
`;
