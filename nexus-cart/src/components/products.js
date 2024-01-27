import React from "react";  
import Nav from "./nav";
import ProductIntro from "./productIntro";
import ProductList from "./productList";
import Footer from "./footer";
import { useParams } from 'react-router-dom';

const Products = ({check}) => {
    const {data} = useParams();
    const productItem = {
        check: check,
        data: data
    }
    return (
        <>
            <Nav />
            <ProductIntro />
            <ProductList productItem = {productItem}/>
            <Footer />
        </>
    );
}

export default Products;