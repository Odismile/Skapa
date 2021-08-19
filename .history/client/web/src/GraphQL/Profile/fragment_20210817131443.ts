import gql from 'graphql-tag';

export const PROFIL_INFO_FRAGMENT = gql`
  fragment ProfilInfo on Profiles {
    id
    position
    bio
    picture
    video
  }
`;

export const PROFILS_INFO_FRAGMENT = gql`
  fragment ProfilsInfo on createProfilePayload {
    profile {
      ...ProfileInfo
    }
  }
  ${PROFIL_INFO_FRAGMENT}
`;