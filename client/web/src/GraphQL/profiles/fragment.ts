import gql from 'graphql-tag';

export const COACH_INFO_FRAGMENT = gql`
  fragment CoachInfo on Profiles {
    id
    position
    picture
    job_seniority_id {
      id
      label
    }
    users_id {
      id
      username
      surname
      lastname
      email
    }
    published_at
    profile_skills {
      id
      skill_id {
        id
        label
      }
    }
    talent_favorits {
      id
    }
    project_favorits {
      id
      # created_at
      # project {
      #   id
      #   created_at
      #   Name
      #   description
      # }
    }
    languages {
      id
      # level
      # language {
      #   id
      #   label
      # }
      # published_at
    }
    profile_type_id {
      id
      label
    }
    projects {
      id
    }
  }
`;
