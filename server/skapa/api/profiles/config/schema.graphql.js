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

    input projects {
      id: ID!
      item: String
    }

    input languages {
      id: ID!
      level: Level
    }

    input skills {
      id: ID!
      skills_id: String
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
      job_seniority: String
      language: languages
      project: projects
      skill: skills
    }
  `,
  // query: `
  //   getProfile(userId:Int):Profiles
  // `,
  mutation: `
  profileCustomizeMeInput(input:profileCustomizeMeInput!): profileCustomizePayload!
`,
  type: {},
  resolver: {
    // Query: {
    //   getProfile: {
    //     description: "Get profile by user ID",
    //     resolverOf: "application::profiles.profiles.find",
    //     resolver: "application::profiles.profiles.getProfile",
    //   },
    // },
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
