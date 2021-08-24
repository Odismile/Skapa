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
    const talent = await strapi.query("items").findOne({ label: "Talent" });
    const data = JSON.parse(JSON.stringify(ctx.request.body.input));

    const entry = await strapi.query("profiles").create({
      bio: data.bio,
      picture: data.picture,
      video: data.video,
      job_seniority_id: data.job_seniority,
      profile_type_id: talent.id,
      position: data.position,
      users_id: data.user_id,
    });

    const createLanguages = async function (level, id) {
      const creatLg = await strapi.query("languages").create({
        level: level,
        language: id,
        profile: entry.id,
      });
    };
    if (data.languages)
      data.languages.map((language) => {
        createLanguages(language.level, language.id);
      });

    const createObject = async function (id) {
      await strapi.query("profile-skills").create({
        skill_id: id,
        profile_id: entry.id,
      });
    };
    if (data.profile_skills)
      data.profile_skills.map((skill) => {
        createObject(skill);
      });

    const createProjectTypes = async function (id) {
      const creatPj = await strapi.query("profile-project-types").create({
        project_type_id: id,
        profile: entry.id,
      });
    };
    if (data.projects)
      data.projects.map((project) => {
        createProjectTypes(project);
      });

    return entry;
  },
};
