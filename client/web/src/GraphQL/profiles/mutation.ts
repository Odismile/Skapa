import gql from 'graphql-tag';

export const CREATE_BOOK = gql`
  mutation CreateBook($input: createBookInput) {
    createBook(input: $input) {
      book {
        id
      }
    }
  }
`;

