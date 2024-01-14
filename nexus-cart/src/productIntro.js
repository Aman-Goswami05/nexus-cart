import React from "react";
import './home.css';
const ProductIntro = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-text">
                    <h2 className="home-title">Our Products</h2>
                    <p>Walk the runway of life in our trendsetting shoes. Elevate your style with every step at Nexus-Cart.</p>
                </div>
                <div className="home-image">
                    <img src="./images/boots/boots2.png" alt="" className="image"></img>
                </div>
            </div>

        </>
    );
}

export default ProductIntro;