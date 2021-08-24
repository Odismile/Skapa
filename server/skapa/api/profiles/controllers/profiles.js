//"use strict";
var { generateReadSignedUrl } = require("../../../Utils/firebaseCloudStorage");
var { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // async getProfile(ctx) {
  //   const { id } = ctx.params;
  //   const entity = await strapi.query("profiles").findOne({ users_id: id });
  //   /*if (entity) {
  //     const getUrl = async (profile, isPicture) => {
  //       let signedUrl;
  //       try {
  //         if (isPicture)
  //           signedUrl = await generateReadSignedUrl(profile.picture);
  //         else signedUrl = await generateReadSignedUrl(profile.video);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //       return signedUrl.url;
  //     };

  //     const url = await getUrl(entity, true);
  //     const video = await getUrl(entity, false);
  //     entity.picture = url;
  //     entity.video = video;
  //   }*/
  //   return entity;
  // },
  // async profileCustomizeMeInput(ctx) {
  //   console.log("testfdqsfdf", ctx.request.body);
  // },
  async profileCustomizeMeInput(ctx) {
    const talent = await strapi.query("items").findOne({ label: "Talent" });

    console.log("talent", talent);
    const data = JSON.parse(JSON.stringify(ctx.request.body.input));
    const tal = JSON.parse(JSON.stringify(talent));

    const entry = await strapi.query("profiles").create({
      bio: data.bio,
      picture: data.picture,
      video: data.video,
      job_seniority: data.job_seniority,
      profil_type_id: tal.id,
    });
    const creatLg = await strapi.query("languages").create({
      level: data.language.level,
      language: data.language.id,
      profile: entry.id,
    });
    const creatSkills = await strapi.query("profile-skills").create({
      skill_id: data.skill.id,
      profile: entry.id,
    });
    const creatPj = await strapi.query("projects").create({
      item: data.project.id,
      profile: entry.id,
    });
    const creatTalentType = await strapi.query("projects").create({
      item: data.project.id,
      profile: entry.id,
    });

    console.log("PROFILE", entry);

    /*  return await strapi.api.projects.services.profiles.create(
      ctx.request.body,
      {},
      ctx.state.user.id
    ); */

    return entry;
  },
};
