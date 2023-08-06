import React from 'react'
import Layout from '../components/Layout'
import galleryImg1 from '../assets/images/property-details/gallery-img-1.jpg'
import galleryImg2 from '../assets/images/property-details/gallery-img-2.jpg'
import galleryImg3 from '../assets/images/property-details/gallery-img-3.jpg'
import Bedroom from '../assets/svg/bedroom.svg'
import Area from '../assets/svg/area.svg'
import Bathroom from '../assets/svg/area.svg'
import Unfurnished from '../assets/svg/unfurnished.svg'
import Building from '../assets/svg/building.svg'
import Umbrella from '../assets/svg/umbrella.svg'
import Flash from '../assets/svg/flash.svg'
import Waves from '../assets/svg/waves.svg'
import Flag from '../assets/svg/flag.svg'
import Flower from '../assets/svg/flower.svg'
import Dumble from '../assets/svg/dumble.svg'
import Location from '../assets/svg/location.svg'
import Book from '../assets/svg/book.svg'
import Jacuzzi from '../assets/svg/jacuzzi.svg'
import Pets from '../assets/svg/pets.svg'
import Door from '../assets/svg/door_open.svg'
import Pool from '../assets/svg/pool.svg'
import Window from '../assets/svg/window.svg'
import Balcony from '../assets/svg/balcony.svg'
import Checkroom from '../assets/svg/checkroom.svg'
import House from '../assets/svg/house.svg'
import OtherBedroom from '../assets/svg/other_bedroom.svg'
import BrandPartner from '../assets/svg/brand-partner.svg'
import CallIcon from '../assets/svg/call-icon.svg'
import MailIcon from '../assets/svg/mail.svg'
import WhatsAppIcon from '../assets/svg/whatsapp.svg'
import PayIcon from '../assets/svg/pay.svg'
import BackArrow from '../assets/svg/back-arrow.svg'
import Fancybox from './FancyBox'

const DynamicProperty = ({ pageContext }) => {
    console.log(pageContext.propertyData, "propertyData")
    const propertyData = pageContext.propertyData;


    return (
        <Layout>
            <main className="property_details">
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="custom-row space-between">
                            <div className="col_md_6 col_12">
                                <a href="javascript:" className="back_icon">
                                    <BackArrow />
                                    <p className="m-0 fw-700">Back to property listing</p>
                                </a>
                            </div>
                            <div className="col_md_6 col_12">
                                <ul className="breadcrumb_list">
                                    <a href="javascript:">
                                        <li>Uae</li>
                                    </a>
                                    <a href="javascript:">
                                        <li>Dubai</li>
                                    </a>
                                    <a href="javascript:">
                                        <li>Damac Lagoons</li>
                                    </a>
                                    <a href="javascript:">
                                        <li>Venice</li>
                                    </a>
                                    <a href="javascript:">
                                        <li>AYKC3D/79/7906</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="image_gallery">
                    <div className="container">
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <div className="images_grid">

                                <a data-fancybox="gallery" href={propertyData.images[0]} className="gallery_img img_1">
                                    <div className="h-100 w-100">
                                        <img className="img-hack" src={propertyData.images[0]} alt="Gallery image" />
                                    </div>
                                </a>
                                <a data-fancybox="gallery" href={propertyData.images[1]} className="gallery_img img_2">
                                    <div className="h-100 w-100">
                                        <img className="img-hack" src={propertyData.images[1]} alt="Gallery image" />
                                    </div>
                                </a>
                                <a data-fancybox="gallery" href={propertyData.images[2]} className="gallery_img img_3 img__withOverlay">
                                    <div className="h-100 w-100">
                                        <img className="img-hack" src={propertyData.images[2]} alt="Gallery image" />
                                    </div>
                                    <div className="content">
                                        <span>{propertyData.images.length - 3}+ Images</span>
                                    </div>
                                </a>
                                {propertyData.images.slice(3, propertyData.images.length).map((img) => {
                                    return (
                                        <a data-fancybox="gallery" href={img}></a>
                                    )
                                })}
                            </div>
                        </Fancybox>
                    </div>
                </section>

                <section className="property_info">
                    <div className="container">
                        <div className="custom-row">
                            <div className="col_lg_9 col_12">
                                <p className="property_sub_title">RESIDENTIAL - VILLA FOR SALE IN DAMAC LAGOONS, DUBAI LAND, UAE</p>
                                <h3 className="property_title">{propertyData.property_title} <span>{propertyData.property_alot_number}</span></h3>
                                <ul className="card-facilities nocard--facilities">
                                    <li>
                                        <span className="ficon">
                                            {/* <img data-src="/assets/svg/bedroom.svg" width="15" height="15" alt="icon" /> */}
                                            <Bedroom />
                                        </span>
                                        <p>{propertyData.no_of_bedroom}</p>
                                    </li>
                                    <li>
                                        <span className="ficon"><Area /></span>
                                        <p>{propertyData.floor_area} sq. ft.</p>
                                    </li>
                                    <li>
                                        <span className="ficon"><Bathroom /></span>
                                        <p>{propertyData.no_of_bathroom} Bathrooms</p>
                                    </li>
                                    <li>
                                        <span className="ficon"><Unfurnished /></span>
                                        <p>{`${propertyData.furnished ? 'Furnished' : 'Unfurnished'}`}</p>
                                    </li>
                                    <li>
                                        <span className="ficon"><Building /></span>
                                        <p>{propertyData.property_type}</p>
                                    </li>
                                </ul>
                                <div className="property_info_badges_wrapper">
                                    <div className="property_info_badge">
                                        <span><Umbrella /></span>
                                        <p>PREMIUM AMENITIES</p>
                                    </div>
                                    <div className="property_info_badge">
                                        <span><Flash /></span>
                                        <p>FAST SELLING</p>
                                    </div>
                                    <div className="property_info_badge">
                                        <span><Waves /></span>
                                        <p>SEASIDE VIEW</p>
                                    </div>
                                    <div className="property_info_badge">
                                        <span><Flag /></span>
                                        <p>LANDMARK</p>
                                    </div>
                                    <div className="property_info_badge">
                                        <span><Flower /></span>
                                        <p>PRIVATE GARDEN</p>
                                    </div>
                                    <div className="property_info_badge">
                                        <span><Dumble /></span>
                                        <p>FITNESS CENTER ACCESS</p>
                                    </div>
                                </div>
                                <hr className="hr" />
                                <div className="unit_details">
                                    <h4>UNIT DETAILS</h4>
                                    <div className="unit_list_wrapper">
                                        <ul className="unit_list">
                                            <li><span>Status</span> <span>{propertyData.status}</span></li>
                                            <li><span>Unit Type</span> <span>{propertyData.property_type}</span></li>
                                            <li><span>Bathroom</span> <span>{propertyData.no_of_bathroom}</span></li>
                                            <li><span>Unit Size</span> <span>{propertyData.floor_area} sq.ft.</span></li>
                                            <li><span>Car Parking</span> <span>{propertyData.car_parking}</span></li>
                                            <li><span>Bedroom</span> <span>1 BHK</span></li>
                                        </ul>
                                        <ul className="unit_list">
                                            <li><span>Furnishing</span> <span>{`${propertyData.furnished ? 'Furnished' : 'Unfurnished'}`}</span></li>
                                            <li><span>Terrace Area/ Balcony</span> <span>{`${propertyData.balcony ? 'Yes' : 'No'}`}</span></li>
                                            <li><span>Launch Date:</span> <span>{propertyData.launched_date}</span></li>
                                            <li><span>Completion/ Handover Date </span> <span>{propertyData.completion_date}</span></li>
                                            <li><span>Floor</span> <span>{propertyData.floor}</span></li>
                                            <li><span>Model/Prototype</span> <span>{propertyData.modalType}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="hr" />
                                <div className="location_sec">
                                    <h4>Location</h4>
                                    <div className="location_wrapper">
                                        <div className="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9418718222387!2d55.13450567600137!3d25.069959236841555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13435f3abe57%3A0xb4c00b9d46311cd0!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1691048888676!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                        <div className="location_details">
                                            <h6 className="location_title">{propertyData.location}</h6>
                                            <h6 className="location_subTitle">{propertyData.property_address}</h6>
                                            <div className="primary-anchor other--anchor w-100 mb-0">
                                                <a href="javascrpit:" className="w-100">
                                                    <Location />
                                                    <span>GET DIRECTIONS</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr" />
                                <div className="description">
                                    <h4>Description</h4>
                                    <p className="content">{propertyData.description} </p>
                                    <a href="javascript:">Read more</a>
                                    <div className="primary-anchor other--anchor mb-0 mt-3">
                                        <a href="javascrpit:">
                                            <Book />
                                            <span>DOWNLOAD BROCHURE</span>
                                        </a>
                                    </div>
                                </div>
                                <hr className="hr" />
                                <div className="amenities">
                                    <h4>Amenities</h4>
                                    <ul className="card-facilities nocard--facilities">
                                        <li>
                                            <span className="ficon"><Flower /></span>
                                            <p>Private Garden</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Flag /></span>
                                            <p>View of a landmark</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Jacuzzi /></span>
                                            <p>Private Jacuzzi</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Pets /></span>
                                            <p>Pets allowed</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Door /></span>
                                            <p>Walk-in closet</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Pool /></span>
                                            <p>Shared pool</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Window /></span>
                                            <p>Double Glazed Windows</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Pool /></span>
                                            <p>Shared pool</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Dumble /></span>
                                            <p>Private Gym</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Balcony /></span>
                                            <p>Balcony</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><House /></span>
                                            <p>Unfurnished</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Balcony /></span>
                                            <p>Balcony</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Waves /></span>
                                            <p>View of Water</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Checkroom /></span>
                                            <p>Built In Wardrobes</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><OtherBedroom /></span>
                                            <p>Bedrooms</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Door /></span>
                                            <p>Walk-in closet</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Pool /></span>
                                            <p>Private Pool</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Pets /></span>
                                            <p>Pets allowed</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Checkroom /></span>
                                            <p>Built In Wardrobes</p>
                                        </li>
                                        <li>
                                            <span className="ficon"><Dumble /></span>
                                            <p>Private Gym</p>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="hr" />
                                <div className="about_collaboration">
                                    <h4>ABOUT THE COLLABORATION</h4>
                                    <p>Experience beyond luxury through our brand partner</p>
                                    <BrandPartner className="brand-partner" />
                                    <p className="content">Inspired by the Greek word 'Chrysogonos' – which means 'begotten of gold'
                                        – de GRISOGONO is a luxury brand founded in 1993 by black diamond specialist Fawaz
                                        Gruosi, an Italian of Lebanese descent. de GRISOGONO traces its roots to traditional
                                        high jewellery that found favour during the Genevan Renaissance of the 16th century.
                                        However, even as a modern atelier, the brand stays true to time-honoured craftsmanship
                                        while its finest timepieces and jewellery continue to evolve.</p>
                                    <a href="javascript:">Read Less</a>
                                    <div className="primary-anchor other--anchor w-100">
                                        <a href="javascrpit:" className="outline-btn w-100">
                                            <span>VIEW OTHER UNITS BY DE GRISOGONO</span>
                                        </a>
                                    </div>
                                </div>
                                <hr className="hr" />
                            </div>
                            <div className="col_lg_3 col_12">
                                <div className="pricing">
                                    <h3>AED {propertyData.price}</h3>
                                    <p className="black-col">Starting price</p>
                                    <div className="card-anchors">
                                        <div className="primary-anchor other--anchor">
                                            <a href="javascrpit" className="outline-btn small-btn">
                                                <CallIcon />
                                                <span>CALL</span>
                                            </a>
                                        </div>
                                        <div className="primary-anchor other--anchor">
                                            <a href="javascrpit" className="outline-btn small-btn">
                                                <MailIcon />
                                                <span>Email</span>
                                            </a>
                                        </div>
                                        <div className="primary-anchor other--anchor">
                                            <a href="javascrpit" className="whatsapp outline-btn small-btn">
                                                <WhatsAppIcon />
                                                <span>WHATSAPP</span>
                                            </a>
                                        </div>
                                        <div className="primary-anchor w-100 mb-0">
                                            <a href="javascrpit" className="w-100">
                                                <PayIcon />
                                                <span>PAY ONLINE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default DynamicProperty