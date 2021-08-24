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
    /*if (entity) {
      const getUrl = async (profile, isPicture) => {
        let signedUrl;
        try {
          if (isPicture)
            signedUrl = await generateReadSignedUrl(profile.picture);
          else signedUrl = await generateReadSignedUrl(profile.video);
        } catch (error) {
          console.log("error", error);
        }
        return signedUrl.url;
      };

      const url = await getUrl(entity, true);
      const video = await getUrl(entity, false);
      entity.picture = url;
      entity.video = video;
    }*/
    return entity;
  },
  async profileCustomizeMeInput(ctx) {
    console.log("testfdqsfdf");
  },
};
