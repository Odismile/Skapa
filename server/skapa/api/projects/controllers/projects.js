"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    return await strapi.api.projects.services.projects.create(
      ctx.request.body,
      {},
      ctx.state.user.id
    );
  },
};
