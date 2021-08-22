import gql from 'graphql-tag';

export const CRETATE_FAVORIT_TALENT = gql`
  mutation createTalentFavorit($input: createTalentFavoritInput) {
    createTalentFavorit(input: $input) {
      talentFavorit {
        id
      }
    }
  }
`;

export const DELETE_FAVORIT_TALENT = gql`
  mutation deleteTalentFavorit($input: deleteTalentFavoritInput) {
    deleteTalentFavorit(input: $input) {
      talentFavorit {
        id
      }
    }
  }
`;
