export default ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    // url: 'https://konkamon-strapi.azurewebsites.net',
    // admin: {
    //     url: "/admin"
    //   }
  });
