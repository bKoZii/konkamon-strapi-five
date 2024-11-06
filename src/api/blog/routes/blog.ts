/**
 * blog router
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/:slug",
      handler: "api::blog.blog.findOne",
    },
    {
      method: "GET",
      path: "/blogs",
      handler: "api::blog.blog.find",
    },
  ],
}