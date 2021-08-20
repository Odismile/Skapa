import gql from 'graphql-tag';

export const PROFIL_INFO_FRAGMENT = gql`
  fragment ProfilInfo on Profiles {
    id
    picture
    bio
    position
    users_id {
      id
      lastname
      surname
    }
    job_seniority_id {
      id
      label
    }
    profile_skills {
      id
      skill_id {
        id
        label
      }
    }
    video
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
