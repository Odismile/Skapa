//"use strict";
var { generateReadSignedUrl } = require("../../../Utils/firebaseCloudStorage");
var { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const results = await strapi.services.profiles.find(ctx.query);
    if (results && results[0]) {
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

      const url = await getUrl(results[0], true);
      const video = await getUrl(results[0], false);
      results[0].picture = url;
      results[0].video = video;
      return results;
    }

    return null;
  },
};
