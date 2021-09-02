'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async delete(params) {
        const { id } = params;
        console.log( strapi.services);
        const entity = await strapi.services.talent-favorits.delete({ id });
        return sanitizeEntity(entity, { model: strapi.models.restaurant });
      },
};
