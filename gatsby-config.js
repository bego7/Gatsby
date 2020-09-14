module.exports = {
  siteMetadata: {
    title: `Eventos`,
    description: `Eventos`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6c757d`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyHskTUqFuouFShs`,
        tables: [
          {
            baseId: `apppV2R5B7Wi7N1cr`,
            tableName: `events`
          },
          {
            baseId: `apppV2R5B7Wi7N1cr`,
            tableName: `galeria`
          },
          {
            baseId: `apppV2R5B7Wi7N1cr`,
            tableName: `inicio`
          },
          {
            baseId: `apppV2R5B7Wi7N1cr`,
            tableName: `pasados`
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
