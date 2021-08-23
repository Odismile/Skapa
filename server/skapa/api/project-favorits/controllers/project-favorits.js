"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async deleteProjectFavorits(ctx) {
    const { projectId, profileId } = ctx.request.body;
    const results = await strapi
      .query("project-favorits")
      .find({ project: projectId, profile: profileId });

    let entity;
    if (results && results[0]) {
      entity = results[0];
      strapi.query("project-favorits").delete({ id: entity.id });
    }
    return entity ? entity.id : 0;
  },
};
