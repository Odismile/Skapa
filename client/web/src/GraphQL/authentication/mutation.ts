import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`;

// export const CREATE_ACCOUNT = gql``;
