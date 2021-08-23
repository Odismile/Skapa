module.exports = {
  definition: ``,
  query: `
  getProfile(userId:Int):Profiles`,
  mutation: ``,
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
      deleteProjectFavorits: {},
    },
  },
};
