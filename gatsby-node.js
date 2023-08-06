const path = require("path")
const slugify = require("slugify")
const dummyData = require('./src/sample_data/dummyData.json');
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Assuming 'properties' is an array in dummyData
  const properties = dummyData;

  // Create individual pages for each property
  properties.forEach((property) => {
    const path = `/detail/${property.property_alot_number}`;

    createPage({
      path,
      component: require.resolve('./src/templates/detail.js'), // Replace with your template component
      context: {
        propertyData: property, // Pass the individual property data to the template component
      },
    });
  });
};


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Property implements Node {
      property_title: String
      property_alot_number: String
      property_address: String
      property_type: String
      price: String
      floor_area: String
      no_of_bedroom: String
      no_of_bathroom: Int
      status: String
      furnished: Boolean
      unit_size: String
      car_parking: Int
      completion_date: String
      launched_date: String
      floor: Int
      location: String
      goldenVisa: Boolean
      balcony: Boolean
      modalType: String
      description: String
      images: [String]
    }
  `;
  createTypes(typeDefs);
};

