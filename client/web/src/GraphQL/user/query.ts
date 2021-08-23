import gql from 'graphql-tag';

export const ME_INFO = gql`
  query MeInfo($id: ID!, $publicationState: PublicationState) {
    profile(id: $id, publicationState: $publicationState) {
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
    }
  }
`;
