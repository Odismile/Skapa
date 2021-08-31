"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    console.log("ato");
    let entity = await strapi.services.contributes.create(ctx.request.body);
    const profile = await strapi
      .query("profiles")
      .findOne({ users_id: ctx.state.user.id });

    profile.currentBalance = profile.currentBalance - entity.value;
    await strapi
      .query("profiles")
      .update({ id: profile.id }, { currentBalance: profile.currentBalance });
    return entity;
  },
};
