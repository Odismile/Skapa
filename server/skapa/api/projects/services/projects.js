'use strict';
var {generateReadSignedUrl} = require("../../../Utils/firebaseCloudStorage"); 

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async find(params, populate) {
        
        const results = await strapi.query('projects').find(params, populate);
        const newResults = await Promise.all(results.map(async (project)=> {
            const signedUrlPicture = await generateReadSignedUrl(project.Picture);
            const signedUrlVideo = await generateReadSignedUrl(project.Video);
            project.Picture = signedUrlPicture.url;
            project.Video = signedUrlVideo.url;
            return project;
        }))
        return newResults;
    }
};
