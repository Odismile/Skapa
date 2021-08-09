import gql from 'graphql-tag';

export const GET_SNACKBAR_STATE = gql`
  query GetSnackbarState {
    snackBar @client {
      type
      message
      isOpen
    }
  }
`;
