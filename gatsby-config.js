/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Erick Alexandre`,
    siteUrl: `https://www.erickalexandre.com`,
    description: `Olá! Meu nome é Erick Alexandre, sou desenvolvedor web apaixonado pelo ecossistema do React.`,
    social: [
      {
        name: 'github',
        url: 'https://github.com/alexandreerick'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/erick-alexandre-83007b139/'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/alexandreErick_'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erick Alexandre`,
        short_name: `Erick.A`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#EF476F`,
        display: `standalone`,
        icon: `src/assets/iconpwa.png`
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#4159C1`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`400`, `500`, `700`],
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ]
}
