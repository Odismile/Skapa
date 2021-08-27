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

    input languages {
      id: ID!
      level: Level
    }

    type ProfileCustomizeMe {
      id: ID!
      bio: String
      picture: String
      video: String
    }

    type profileCustomizePayload {
      profile: ProfileCustomizeMe
    }

    input profileCustomizeMeInput {
      bio: String
      picture: String
      video: String
      position: String
      job_seniority: String
      languages: [languages]
      projects: [ID!]
      profile_skills: [ID!]
      user_id: String
      wallet: Float
    }
  `,
  query: `
    getProfile(userId:Int):Profiles
   `,
  mutation: `
  profileCustomizeMeInput(input:profileCustomizeMeInput!): profileCustomizePayload!
`,
  type: {},
  resolver: {
    Query: {
      getProfile: {
        description: "Get profile by user ID",
        resolverOf: "application::profiles.profiles.find",
        resolver: "application::profiles.profiles.getProfile",
      },
    },
    Mutation: {
      // deleteProjectFavorits: {},
      profileCustomizeMeInput: {
        description: "Create profile ",
        resolverOf: "application::profiles.profiles.create",
        resolver: "application::profiles.profiles.profileCustomizeMeInput",
      },
    },
  },
};
