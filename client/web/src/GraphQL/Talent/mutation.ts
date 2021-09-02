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
  mutation deleteTalentFavorit($profileId: Int, $talentId: Int) {
    deleteTalentFavorits(profileId: $profileId, talentId: $talentId)
  }
`;
