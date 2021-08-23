"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async deleteTalentFavorits(ctx) {
    const { userId, talentId } = ctx.request.body;
    const profile = await strapi
      .query("profiles")
      .findOne({ users_id: userId });

    const results = await strapi
      .query("talent-favorits")
      .find({ profile: profile.id, talent_id: talentId });

    let entity;
    if (results && results[0]) {
      entity = results[0];
      strapi.query("talent-favorits").delete({ id: entity.id });
    }
    return entity ? entity.id : 0;
  },
};
