import React from "react";
import Nav from "./nav"
import Home from "./home"
import Brands from "./brands";
import Footer from "./footer";
import Carousel from "./carousel";

const Main = () => {
    return (
        <>
            <Nav />
            <Home />
            <Carousel />
            <Brands />
            <Footer />
        </>
    );
}

export default Main;