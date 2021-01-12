module.exports = {
  siteMetadata: {
    title: `HTML Reference`,
    description: `Html reference, nothing more`,
    author: `@noAdApps`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `htmlTags`,
        path: `${__dirname}/src/resources/htmlTags`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/resources`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript"},
              showLineNumbers: true,
            }
          }
        ]
      }
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `B612\:400,400i,700, 700i`,
          `Lato\:400,400i,700, 700i`,
          `Open Sans\:400,400i,700, 700i`,
          `Roboto\:300,300i, 400,400i,500, 500i`,
          `Ubuntu\:300,300i, 400,400i,500, 500i`
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extension: ['.md', '.mdx']
    //      defaultLayouts: {
    //        default: require.resolve('./src/components/layout/layout.js')
    //      }
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-sass'
  ]
};
