/**
 * @type {import('gatsby').GatsbyConfig}
 */
const dummyData = require('./src/sample_data/dummyData.json'); 
module.exports = {
  siteMetadata: {
   properties:dummyData.properties
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/"
      },
      __key: "images"
    },
    "gatsby-plugin-react-svg",   // Add this line to include the SVG plugin
  ]
};