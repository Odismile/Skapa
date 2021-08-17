import gql from 'graphql-tag';

export const PROFIL_INFO_FRAGMENT = gql`
  fragment ProfilInfo on Profiles {
    id
    position
    bio
  }
`;

export const PROFILS_INFO_FRAGMENT = gql`
  fragment ProfilsInfo on createProfilePayload {
    profile {
      ...ProfilInfo
    }
  }
  ${PROFIL_INFO_FRAGMENT}
`;
