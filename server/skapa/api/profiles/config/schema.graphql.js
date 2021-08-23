module.exports = {
  type: {
    UsersPermissionsPermission: false,
  },
  definition: /* GraphQL */ `
    enum Level {
      BASIC
      INTERMEDIATE
      FLUENT
    }

    type projects {
      id: ID!
      item: String
    }

    type languages {
      id: ID!
      level: Level
    }

    type skills {
      id: ID!
      skills_id: String
    }

    type ProfileCustomizeMe {
      id: ID!
      bio: String
      picture: String
      video: String
      job_seniority: String
      project: projects
      language: languages
      skill: skills
    }

    type profileCustomizePayload {
      profile: ProfileCustomizeMe
    }

    input profileCustomizeMeInput {
      bio: String
      picture: String
      video: String
      job_seniority: String
      language: languages
      project: projects
      skill: skills
    }
  `,
  mutation: `
    profileCustomized(input: profileCustomizeMeInput!): profileCustomizePayload!
`,
};
