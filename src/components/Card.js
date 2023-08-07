import React from 'react'
import img1 from '../assets/images/card/card-img-1.webp'
import Bedroom from '../assets/svg/bedroom.svg'
import Area from '../assets/svg/area.svg'
import FurnishedIcon from '../assets/images/unfurnished.png'
import Handover from '../assets/svg/handover.svg'
import CallIcon from '../assets/svg/call-icon.svg'
import MailIcon from '../assets/svg/mail.svg'
import WhatsAppIcon from '../assets/svg/whatsapp.svg'
import HeartIcon from '../assets/svg/white-heart.svg'
import PayIcon from '../assets/svg/pay.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Card = ({ data }) => {
    console.log(data, "data")
    return (
        <div class="property-card">

            <div class="card-tags">
                <span class="card-heart">
                    <HeartIcon />
                </span>
                {data.goldenVisa && <span class="tag">GOLDEN VISA</span>}
            </div>
            <div class="card-img">
                <Swiper pagination={true} modules={[Pagination]} className="card-img-slider">
                    <SwiperSlide>
                        <img src={img1} width="477" height="333" alt="property" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} width="477" height="333" alt="property" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} width="477" height="333" alt="property" />
                    </SwiperSlide>

                    <div class="swiper-pagination"></div>
                </Swiper>
            </div>


            <div class="card-description">

                <div class="card-title">
                    <p class="para-small">OFFPLAN - APARTMENT</p>
                    <h3 class="card-price">AED {data.price}</h3>
                    <p>{data.location}</p>
                </div>

                <div class="card-details">
                    <ul class="card-facilities">
                        <li>
                            <span class="ficon"><Bedroom /></span>
                            <p>{data.no_of_bedroom}</p>
                        </li>
                        <li>
                            <span class="ficon"><Area /></span>
                            <p>{data.floor_area} sq. ft.</p>
                        </li>
                        <li>
                            <span class="ficon"><img src={FurnishedIcon} /></span>
                            <p>{`${data.furnished ? 'Furnished' : 'Unfurnished'}`}</p>
                        </li>
                        <li>
                            <span class="ficon"><Handover /></span>
                            <p>{data.completion_date}</p>
                        </li>
                    </ul>
                    <div class="card-anchors">
                        <div class="primary-anchor outline-btn small-btn">
                            <a href="javascrpit" class="outline-btn small-btn">
                                <CallIcon />
                                <span>CALL</span>
                            </a>
                        </div>
                        <div class="primary-anchor">
                            <a href="javascrpit" class="outline-btn small-btn">
                                <MailIcon />
                                <span>Email</span>
                            </a>
                        </div>
                        <div class="primary-anchor">
                            <a href="javascrpit" class="whatsapp outline-btn small-btn">
                                <WhatsAppIcon />
                                <span>WHATSAPP</span>
                            </a>
                        </div>
                        <div class="primary-anchor w-100 mb-0">
                            <a href="javascrpit" class="w-100">
                                <PayIcon />
                                <span>PAY ONLINE</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Card