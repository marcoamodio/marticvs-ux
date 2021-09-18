module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "marticvs-ux",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
          `lato`,
          `lato\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
