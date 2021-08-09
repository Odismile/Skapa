import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

// export const CREATE_ACCOUNT = gql``;
