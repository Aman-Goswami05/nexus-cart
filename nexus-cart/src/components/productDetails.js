import React,{useEffect,useState} from "react";
import Nav from "./nav";
import Footer from "./footer";
import { TiTick } from "react-icons/ti";
import { FaFacebook} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
 

const ProductDetails = () => {
    const productObj = useParams();
    const productId = productObj.data;
    const [product,setProduct] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/findProduct',{
            method: "post",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({productId})
        }).then((res) => res.json())
        .then((data)=>{
            setProduct(data);
        });
    },[]);
    return (
        <>
            <Nav />
            <div className="product-details-wrapper">
                <div className="product-details-card">
                    <div className="product-details-image">
                        <img src={product.Image}></img>
                    </div>
                    <div className="product-details-content">
                        <h2 className="product-details-title">{product.title}</h2>
                        <div className="product-details-price">
                            <p className="last-price">Old Price: <span>{product.oldPrice}</span></p>
                            <p className="new-price">New Price: <span>{product.newPrice}</span></p>
                        </div>
                        <div className="product-detail">
                            <h2>About this item</h2>
                            <p>{product.About}</p>
                            <ul>
                                <li><TiTick /> Color: <span>Black</span></li>
                                <li><TiTick /> Available: <span>In Stock</span></li>
                                <li><TiTick /> Category: <span>Shoes</span></li>
                            </ul>
                        </div>
                        
                        <div className="purchase-info">
                            <input type="number" min="1" max="5" id="quantity"></input>
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