import React, { useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import '../assets/css/custom.min.css'
import Filters from "../components/Filters"
import Card from "../components/Card"
import { Link, graphql } from 'gatsby';

export default function Home({ data }) {
    // console.log(data);
    const properties = data.allDummyDataJson.nodes.map((property) => property);
    const [showSorting, setshowSorting] = useState(false)
    const [checkedValues, setCheckedValues] = useState([]);
    const [sort, setSort] = useState(['All', 'Studio', '1BR'])
    const [selectedOption, setSelectedOption] = useState('All');

    const handleCheckboxChange = (event, option) => {
        const { checked } = event.target;
        setSelectedOption(checked ? option : '');
        // console.log('from home======',selectedOption);
    };

    const handleChildStateChange = (newState) => {
        setCheckedValues(newState);
    };


    const filteredProperties = properties.filter((property) => {
        if (checkedValues.length === 0 || checkedValues.includes("All")) {
            // If no filters selected or "All" selected, return all properties
            return true;
        } else {
            // Filter properties based on no_of_bedroom field matching any checkedValues option
            return checkedValues.includes(property.no_of_bedroom);
        }
    });

    const sortProperties = (properties, option) => {
        switch (option) {
            case 'All':
                return properties; // No sorting needed
            case 'Studio':
                return properties.slice().sort((a, b) => a.no_of_bedroom.localeCompare(b.no_of_bedroom));
            case '1BR':
                return properties.slice().sort((a, b) => a.no_of_bedroom.localeCompare(b.no_of_bedroom));
            // Add more cases for other sorting options if needed
            default:
                return properties; // No sorting needed
        }
    };

    const sortedProperties = sortProperties(filteredProperties, selectedOption);


    return (
        <Layout>
            <main className="page">
                <Filters onStateChange={handleChildStateChange} />
                <section class="section property">
                    <div class="container">
                        <div class="sort-wrapper">
                            <div class="selection-input ">
                                <h6 class="h6 m-0 w-[130px]" onClick={() => { setshowSorting(!showSorting) }} > Sort by: <span>{selectedOption ? selectedOption : 'All'}</span>
                                </h6>
                                {showSorting && <div class="sort-popup">
                                    <p>Sort by</p>
                                    <ul class="filters-options">
                                        {sort && sort.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <label class="input-group">{item} <input value={item}
                                                        checked={selectedOption === item}
                                                        onChange={(e) => handleCheckboxChange(e, item)} type="checkbox" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>

                                            )
                                        })}


                                    </ul>
                                </div>}
                            </div>
                        </div>
                        <div class="property-card-list">

                            {sortedProperties.map((property, index) => (
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
    allDummyDataJson {
        nodes {
        property_title
        property_alot_number
        property_address
        property_type
        price
        floor_area
        no_of_bedroom
        no_of_bathroom
        status
        furnished
        unit_size
        car_parking
        completion_date
        launched_date
        floor
        location
        goldenVisa
        balcony
        modalType
        description
        images
      }
    }
}
`;