/**
 * bose controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::bose.bose', ({ strapi }) => ({
  async findOne(ctx){
    const { id } = ctx.params
    const entity = await strapi.db.query("api::bose.bose").findOne({
      where: { slug: id },
      populate: ["image", "competitions"]
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
