import React from 'react'
import img1 from '../assets/images/card/card-img-1.webp'
import Bedroom from '../assets/svg/bedroom.svg'
import Area from '../assets/svg/area.svg'
import Unfurnished from '../assets/svg/unfurnished.svg'
import Handover from '../assets/svg/handover.svg'
import CallIcon from '../assets/svg/call-icon.svg'
import MailIcon from '../assets/svg/mail.svg'
import WhatsAppIcon from '../assets/svg/whatsapp.svg'
import PayIcon from '../assets/svg/pay.svg'

const Card = () => {
    return (
        <div class="property-card">

            <div class="card-tags">
                <span class="card-heart">
                    <img src="/assets/svg/white-heart.svg" alt="" class="svg-convert" />
                </span>
                <span class="tag">GOLDEN VISA</span>
            </div>
            <div class="card-img">
                <div class="card-img-slider swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={img1} width="477" height="333" alt="property" />
                        </div>
                        <div class="swiper-slide">
                            <img src={img1} width="477" height="333" alt="property" />
                        </div>
                        <div class="swiper-slide">
                            <img src={img1} width="477" height="333" alt="property" />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>


            <div class="card-description">

                <div class="card-title">
                    <p class="para-small">OFFPLAN - APARTMENT</p>
                    <h3 class="card-price">AED 1,320,000</h3>
                    <p>Canal Crown, Business Bay, Dubai</p>
                </div>

                <div class="card-details">
                    <ul class="card-facilities">
                        <li>
                            <span class="ficon"><Bedroom /></span>
                            <p>1</p>
                        </li>
                        <li>
                            <span class="ficon"><Area /></span>
                            <p>10,000 sq. ft.</p>
                        </li>
                        <li>
                            <span class="ficon"><Unfurnished /></span>
                            <p>Unfurnished</p>
                        </li>
                        <li>
                            <span class="ficon"><Handover /></span>
                            <p>12/31/2024</p>
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