import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import { TiTick } from "react-icons/ti";
import { FaFacebook} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


const ProductDetails = () => {
    return (
        <>
            <Nav />
            <div className="product-details-wrapper">
                <div className="product-details-card">
                    <div className="product-details-image">
                        <img src="images/boots/boots1.png"></img>
                    </div>
                    <div className="product-details-content">
                        <h2 className="product-details-title">Nike Shoes</h2>
                        <div className="product-details-price">
                            <p className="last-price">Old Price: <span>$257.00</span></p>
                            <p className="new-price">New Price: <span>$200.00</span></p>
                        </div>
                        <div className="product-detail">
                            <h2>About this item</h2>
                            <p>About this item</p>
                            <p>About this item</p>
                            <ul>
                                <li><TiTick /> Color: <span>Black</span></li>
                                <li><TiTick /> Available: <span>In Stock</span></li>
                                <li><TiTick /> Category: <span>Shoes</span></li>
                            </ul>
                        </div>
                        
                        <div className="purchase-info">
                            <input type="number" min="1" max="5" id="quantity" value="1"></input>
                            <button type="button" className="add-cart-btn">
                                Add to cart <feFuncA />
                            </button>
                        </div>

                        <div className="social-links">
                            <p>Share At: </p>
                            <a href="#">
                                <FaFacebook size={22} />
                            </a>
                            <a href="#">
                                <FaXTwitter size={17}/>
                            </a>
                            <a href="#">
                                <AiFillInstagram size={22} />
                            </a>
                            <a href="#">
                                <IoLogoWhatsapp size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetails;