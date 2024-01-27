import React from "react";
import BrandsJson from './brands-list.json';
import { Link } from "react-router-dom";
const Brands = () => {
    return (
        <>
            <div className="brands">
                <div className="brands-wrap">
                    <h2>Top Brands</h2>
                    <hr />
                    <div className="brands-in">
                        <ul>
                            {
                                BrandsJson.map(brand => {
                                    return (
                                        <li>
                                            <Link to={`/Products/Brand/${brand.brand}`}>
                                                <img src={brand.image} alt=""></img>
                                                <h4>{brand.brand}</h4>
                                            </Link>
                                        </li>        
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brands;