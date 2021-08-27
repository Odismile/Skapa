"use strict";

const {
  generateReadSignedUrl,
} = require("../../../Utils/firebaseCloudStorage");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(data, { files } = {}, userId) {
    // const profile = await strapi
    //   .query("profiles")
    //   .findOne({ users_id: userId });
    // console.log(profile);
    // const project_skills = data.project_skills;
    // const items = await strapi
    //   .query("items")
    //   .find({ label_in: project_skills, type: "SKILLS" });
    // const selectedIds = items.map(({ id }) => id);

    // delete data.project_skills;

    // const entry = await strapi.query("projects").create({
    //   ...data,
    //   profile: profile.id,
    //   created_by: userId,
    //   updated_by: userId,
    // });

    // const createPS = async function (projecId, skillId) {
    //   const prSkill = await strapi.query("project-skills").create({
    //     project: projecId,
    //     item: skillId,
    //   });
    // };

    // selectedIds.forEach((elt) => {
    //   createPS(entry.id, elt);
    // });
    return null;
  },
  async find(params, populate) {
    const results = await strapi.query("profiles").find(params, populate);
    const newResults = await Promise.all(
      results.map(async (profile) => {
        if (profile.picture)
          profile.picture = (await generateReadSignedUrl(profile.picture)).url;
        if (profile.video)
          profile.video = (await generateReadSignedUrl(profile.video)).url;

        return profile;
      })
    );
    return newResults;
  },
};
