import gql from 'graphql-tag';

export const ME_INFO = gql`
  query MeInfo($id: ID!, $publicationState: PublicationState) {
    user(id: $id, publicationState: $publicationState) {
      id
      username
      surname
      lastname
      email
      confirmed
      blocked
    }
  }
`;
