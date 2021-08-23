module.exports = {
  definition: ``,
  query: ``,
  mutation: `
    deleteProjectFavorits(projectId:Int, profileId:Int): Int
  `,
  type: {},
  resolver: {
    Query: {},
    Mutation: {
      deleteProjectFavorits: {
        description: "Delete project-favorits by project-id and profile-id",
        resolverOf: "application::project-favorits.project-favorits.delete",
        resolver:
          "application::project-favorits.project-favorits.deleteProjectFavorits",
      },
    },
  },
};
