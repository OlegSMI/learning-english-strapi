module.exports = () => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: "learning-english-strapi.vercel.app",
      //   teamFilter: "your-team-id-on-vercel",
      //   roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
