import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import './productList.css';
import { Link } from "react-router-dom";
import ProductJson from './product-list.json';
const ProductList = () => {
    return (
        <>
            <div className="card-container">
                <h3 className="title">Men Shoes</h3>
                <div className="product-container">
                    {
                        ProductJson.map(product => {
                            return (
                                <div className="product">
                                <img src={product.Image} alt=""></img>
                                    <h3>{product.title}</h3>
                                    <div className="price">
                                        {product.newPrice}
                                    </div>
                                    <Link className="product-info-button" to="/Product-Details">
                                        <FaInfoCircle size={15}/>
                                        <h3>Details</h3>
                                    </Link>
                            </div>        
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProductList;