'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async delete(ctx) {
        const { id } = ctx.params;
        const entityToDelete =
          (await strapi.services.talent) - favorit.findOne({ id });
    
        const entity = await strapi.services.restaurant.delete({ id });
        return sanitizeEntity(entity, { model: strapi.models.restaurant });
      },
};
