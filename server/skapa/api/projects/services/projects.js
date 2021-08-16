"use strict";
const { isDraft } = require("strapi-utils").contentTypes;

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(data, { files } = {}) {
    const project_skills = data.project_skills;
    const items = await strapi
      .query("items")
      .find({ label_in: project_skills, type: "SKILLS" });
    const selectedIds = items.map(({ id }) => id);

    delete data.project_skills;

    const entry = await strapi.query("projects").create(data);

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
};
