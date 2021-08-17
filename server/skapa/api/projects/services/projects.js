'use strict';
var {generateReadSignedUrl} = require("../../../Utils/firebaseCloudStorage"); 

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async find(params, populate) {
        console.log("tonga ato tsika");
        let az = await generateReadSignedUrl("project/profile/76/kymco.jpg");
        console.log(az);
        let picture = "";
        const result = strapi.query('projects').find(params, populate);
        result.then((res)=>{
            console.log("result : ", res); 
            picture = res.picture
            console.log("SARYSARYSARYSARY", picture);
        });
        console.log("result : ", result);
    }
};
