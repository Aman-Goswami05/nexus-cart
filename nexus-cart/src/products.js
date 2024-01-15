import React from "react";  
import Nav from "./nav";
import ProductIntro from "./productIntro";
import ProductList from "./productList";
import Footer from "./footer";
import { useParams } from 'react-router-dom';

const Products = () => {
    const {data} = useParams();
    return (
        <>
            <Nav />
            <ProductIntro />
            <ProductList />
            <Footer />
        </>
    );
}

export default Products;