import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::location.location").findMany({
        where: { slug: id },
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
