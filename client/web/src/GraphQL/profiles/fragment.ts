import gql from 'graphql-tag';

export const COACH_INFO_FRAGMENT = gql`
  fragment CoachInfo on Profiles {
    id
    created_at
    updated_at
    position
    bio
    picture
    video
    job_seniority_id {
      id
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
      created_at
      published_at
    }
    talent_favorits {
      id
      created_at
      published_at
    }
    project_favorits {
      id
      created_at
      project {
        id
        created_at
        Name
        description
      }
    }
    languages {
      id
      level
      language {
        id
        label
      }
      published_at
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
