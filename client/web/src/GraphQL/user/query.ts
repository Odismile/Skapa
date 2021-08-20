import gql from 'graphql-tag';

export const ME_INFO = gql`
  query MeInfo($where: JSON) {
    profiles(where: $where) {
      id
      picture
      users_id {
        id
        username
        surname
        lastname
        email
      }
    }
  }
`;
