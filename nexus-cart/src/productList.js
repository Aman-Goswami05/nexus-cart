import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductJson from './product-list.json';
import './productList.css';

const ProductList = ({productItem}) => {
    return (
        <>
            <div className="card-container">
                <h3 className="title">{productItem.data}</h3>
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