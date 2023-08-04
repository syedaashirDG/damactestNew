import React from "react"
import Img1 from '../assets/svg/brand-logo-white.svg'
import Img2 from "../assets/svg/facebook.svg"
import Img3 from "../assets/svg/twitter.svg"
import Img4 from "../assets/svg/instagram.svg"
import Img5 from "../assets/svg/linkedin.svg"
import Img6 from "../assets/svg/youtube.svg"


const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer_wrapper">
                    <div class="footer_col">
                        <div>
                            {/* <img src={img1} alt="logo"/> */}
                            <Img1 />
                        </div>
                        <ul>
                            <a href="javascript:">
                                <li>Why Damac</li>
                            </a>
                            <a href="javascript:">
                                <li>About Damac</li>
                            </a>
                            <a href="javascript:">
                                <li>Founder’s Message</li>
                            </a>
                        </ul>
                    </div>
                    <div class="footer_col">
                        <div class="social_col">
                            <h6 class="primary-col">Follow us on</h6>
                            <div class="icons_wrapper">
                                <a href="javascript:"><Img2 /></a>
                                <a href="javascript:"><Img3 /></a>
                                <a href="javascript:"><Img4 /></a>
                                <a href="javascript:"><Img5 /></a>
                                <a href="javascript:"><Img6 /></a>
                            </div>
                        </div>
                        <ul>
                            <a href="javascript:">
                                <li>Hospitality</li>
                            </a>
                            <a href="javascript:">
                                <li>Paramount Hotel - Dubai</li>
                            </a>
                            <a href="javascript:">
                                <li>Paramount Hotel - Midtown</li>
                            </a>
                        </ul>
                    </div>
                    <div class="footer_col">
                        <div class="newsletter_col">
                            <h6 class="primary-col">Subscribe to Offers</h6>
                            <form class="news_form">
                                <input type="email" name="newsletter" placeholder="Enter email address" id="newsletter" />
                                <div class="primary-anchor subs_btn">
                                    <button type="button">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="list_wrapper">
                            <ul>
                                <a href="javascript:">
                                    <li>Damac Assist</li>
                                </a>
                                <a href="javascript:">
                                    <li>Mortgage Assist</li>
                                </a>
                                <a href="javascript:">
                                    <li>FAQS</li>
                                </a>
                            </ul>
                            <ul>
                                <a href="javascript:">
                                    <li>Media center</li>
                                </a>
                                <a href="javascript:">
                                    <li>Video Gallery</li>
                                </a>
                                <a href="javascript:">
                                    <li>News</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer