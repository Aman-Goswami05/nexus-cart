import React from "react";
import { FaGithub,FaFacebook} from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdOutlineMailLock } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <footer>
                    <div className="container">
                        <div className="sec about">
                            <h2>About Us</h2>
                            <p>
                                With a curated collection of high-quality shoes, we strive to provide a seamless online shopping experience. Whether you're a trendsetter or in search of timeless classics, our diverse range ensures there's something for every style. Step into fashion-forward footwear with Nexus-Mart.
                            </p>
                            <ul className="sci">
                                <li><a href="#"><span><FaGithub size={22}/></span></a></li>
                                <li><a href="#"><span><FaFacebook size={22}/></span></a></li>
                                <li><a href="#"><span><SiInstagram size={22}/></span></a></li>
                            </ul>
                        </div>
                        <div className="sec quicklinks">
                            <h2>Support</h2>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="sec contact">
                            <h2>Contact Us</h2>
                            <ul className="info">
                                <li>
                                    <span><FaPhone /></span>
                                    <p>+91-98167XXXXX</p>
                                </li>
                                <li>
                                    <span><MdOutlineMailLock /></span>
                                    <p><a href="mailto:amangoswami5570@gmail.com">amangoswami5570@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <hr />
                <div className="copyrightText">
                    <p>Copyright &copy; 2023 Aman Goswami. All Rights Reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;