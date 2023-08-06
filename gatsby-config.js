/**
 * @type {import('gatsby').GatsbyConfig}
 */
const dummyData = require('./src/sample_data/dummyData.json'); 
module.exports = {
  siteMetadata: {
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/assets/"
    //   },
    //   __key: "images"
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": "./src/sample_data/dummyData.json", // Adjust the path to your JSON data file
      },
      __key: "data",
    },
    
    "gatsby-plugin-react-svg",   // Add this line to include the SVG plugin
  ]
};