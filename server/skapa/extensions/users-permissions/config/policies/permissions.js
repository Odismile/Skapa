const _ = require('lodash');
const axios = require('axios');

module.exports = async (ctx, next) => {
  let role;

  if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        'users-permissions'
      ].services.jwt.getToken(ctx);

 

    } catch (err) {
      try {

        // get token from firebase and inject into strapi        return await next();
      } catch (error) {
        return handleErrors(ctx, new Error('Invalid token: Token did not match with Strapi and Auth0'), 'unauthorized');
      }

      return handleErrors(ctx, err, 'unauthorized');
    }
}
}