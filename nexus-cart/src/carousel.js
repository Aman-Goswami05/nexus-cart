import React from "react";
import './carousel.css';
const Carousel = () => {
    return (
        <>
            <h2 className="carousel-title">Explore</h2>
            <section className="carousel-container">
                <div className="slider-wrapper">
                    <div className="slider">
                        <img id="slide-2" src="./images/carousel/slide2.png" alt=""></img>
                        <img id="slide-3" src="./images/carousel/slide3.png" alt=""></img>
                        <img id="slide-8" src="./images/carousel/slide8.png" alt=""></img>
                    </div>
                </div>
                <div className="slider-nav">
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-8"></a>
                </div>
            </section>

        </>
    );
}

export default Carousel;