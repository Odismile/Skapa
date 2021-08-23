module.exports = {
    definition: ``,
    query: ``,
    mutation: `
      deleteTalentFavorits(profileId:Int): Int
    `,
    type: {},
    resolver: {
      Query: {},
      Mutation: {
        deleteTalentFavorits: {
          description: "Delete talent-favorits by profile-id",
          resolverOf: "application::talent-favorits.talent-favorits.delete",
          resolver:
            "application::talent-favorits.talent-favorits.deleteTalentFavorits",
        },
      },
    },
  };
  