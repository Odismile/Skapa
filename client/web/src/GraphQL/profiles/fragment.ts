import gql from 'graphql-tag';

export const COACH_INFO_FRAGMENT = gql`
  fragment CoachInfo on Profiles {
    id
    updated_at
    position
    bio
    picture
    published_at
    profile_skills {
      id
      # created_at
      # skill_id
      # profile_id
      # published_at
    }
    talent_favorits {
      id
      # created_at
      # coach_id
      # talent_id
      # published_at
    }
    project_favorits {
      id
      created_at
      project {
      }
    }
    languages {
      id
      level
      language
      users_permissions_user
    }
    projects {
      id
      created_at
      Name
      description
    }
  }
`;

