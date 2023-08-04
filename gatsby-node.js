const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  query MyQuery {
    site {
      siteMetadata {
        properties {
          property_title
          status
          unit_size
          property_type
          property_alot_number
          property_address
          price
          no_of_bedroom
          no_of_bathroom
          location
          images
          furnished
          floor_area
          floor
          description
          completion_date
          car_parking
          balcony
          launched_date
          modalType
        }
      }
    }
  }
  `)

  result.data.site.siteMetadata.properties.forEach(property => {
    createPage({
      path: `/detail/${property.property_alot_number}`,
      component: path.resolve(`src/templates/detail.js`),
      context: {
        property
      },
    })
  })
}
