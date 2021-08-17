import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation UpdateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
      }
    }
  }
`;
