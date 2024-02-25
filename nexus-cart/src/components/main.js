import React from "react";
import Nav from "./nav"
import Home from "./home"
import Brands from "./brands";
import Footer from "./footer";
import Carousel from "./carousel";
import { useParams } from "react-router-dom";

const Main = () => {
    const {data} = useParams(); 
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