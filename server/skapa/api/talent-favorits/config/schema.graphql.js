module.exports = {
  definition: ``,
  query: ``,
  mutation: `
      deleteTalentFavorits(profileId:Int, talentId:Int):Int
    `,
  type: {},
  resolver: {
    Query: {},
    Mutation: {
      deleteTalentFavorits: {
        description: "Delete talent-favorits by profileId and talentId",
        resolverOf: "application::talent-favorits.talent-favorits.delete",
        resolver:
          "application::talent-favorits.talent-favorits.deleteTalentFavorits",
      },
    },
  },
};
