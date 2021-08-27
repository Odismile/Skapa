"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity = await strapi.services.contributes.create(ctx.request.body);
    const profile = await strapi
      .query("profiles")
      .findOne({ users_id: ctx.state.user.id });

    profile.currentBalance = profile.currentBalance - entity.value;
    await strapi.services.profiles.update(profile.id, profile);
    return entity;
  },
};
