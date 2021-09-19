module.exports = {
  siteMetadata: {
    siteUrl: "https://marcoamodio.info",
    title: "marticvs-ux",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato,`,
          `lato\:300,400,400i,700,800,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.ico',
      },
    }
  ],
};
