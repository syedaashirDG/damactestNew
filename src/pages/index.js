import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import '../assets/css/custom.min.css'
import Filters from "../components/Filters"
import Card from "../components/Card"
import { Link, graphql } from 'gatsby';

export default function Home({data}) {
    // console.log(data);
    const properties = data.site.siteMetadata.properties.map((property) =>property);
    console.log(properties);
    return (
        <Layout>
            <main className="page">
                <Filters />
                <section class="section property">
                    <div class="container">
                        <div class="sort-wrapper">
                            <div class="selection-input ">
                                <h6 class="h6 m-0"> Sort by: <span>Recent</span>
                                </h6>
                                <div class="sort-popup">
                                    <p>Sort by</p>
                                    <ul class="filters-options">
                                        <li>
                                            <label class="input-group">All <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="input-group">Studio <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="input-group">1BR <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="property-card-list">
                            
                            {properties.map((property, index) => (
            <Link key={index} to={`/detail/${property.property_alot_number}`}>
                <Card data={property} />
            </Link>
          
        ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    site {
      siteMetadata {
        properties {
          property_title
          property_type
          property_address
          property_alot_number
          price
          no_of_bathroom
          location
          images
          furnished
          floor_area
        }
      }
    }
  }
`;