"use strict";
var { generateReadSignedUrl } = require("../../../Utils/firebaseCloudStorage");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(data, { files } = {}, userId) {
    const profile = await strapi
      .query("profiles")
      .findOne({ users_id: userId });

    const project_skills = data.project_skills;
    const items = await strapi
      .query("items")
      .find({ label_in: project_skills, type: "SKILLS" });
    const selectedIds = items.map(({ id }) => id);

    delete data.project_skills;

    const entry = await strapi.query("projects").create({
      ...data,
      profile: profile.id,
      created_by: userId,
      updated_by: userId,
    });

    const createPS = async function (projecId, skillId) {
      const prSkill = await strapi.query("project-skills").create({
        project: projecId,
        item: skillId,
      });
    };

    selectedIds.forEach((elt) => {
      createPS(entry.id, elt);
    });

    return entry;
  },
  async find(params, populate) {
    const results = await strapi.query("projects").find(params, populate);
    const newResults = await Promise.all(
      results.map(async (project) => {
        const signedUrlPicture = await generateReadSignedUrl(project.Picture);
        const signedUrlVideo = await generateReadSignedUrl(project.Video);
        project.Picture = signedUrlPicture.url;
        project.Video = signedUrlVideo.url;
        return project;
      })
    );
    return newResults;
  },
};
