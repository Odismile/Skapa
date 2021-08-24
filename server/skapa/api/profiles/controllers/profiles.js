//"use strict";
var { generateReadSignedUrl } = require("../../../Utils/firebaseCloudStorage");
var { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getProfile(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.query("profiles").findOne({ users_id: id });
    if (entity) {
      if (entity.picture)
        entity.picture = (await generateReadSignedUrl(entity.picture)).url;
      if (entity.video)
        entity.video = (await generateReadSignedUrl(entity.video)).url;
    }
    return entity;
  },
};
