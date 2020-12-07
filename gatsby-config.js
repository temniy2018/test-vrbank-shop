require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Test for vrbank`,
    description: `Test for vrbank`,
    author: `@temniy2018`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [ "siteusers", "products" ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/components/header/modshopLogo@2x.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
