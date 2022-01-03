/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata: {
    title: "Rajat portfolio",
    description: " KnOW MORE ABOUT ME BEFORE YOU HIRE",
    copyright: " This site is copyrighted under @Rajat Portfolio",
  },
}
