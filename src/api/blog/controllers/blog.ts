/**
 * blog controller
 */

import { factories } from "@strapi/strapi"

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params

      const query = {
        filters: { slug },
        status: "published",
        ...ctx.query,
      }

      const entity = await strapi.entityService.findMany(
        "api::blog.blog",
        query
      )

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity[0])
    },
  })
)
