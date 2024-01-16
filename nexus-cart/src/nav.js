import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch,FaUserCircle,FaCartArrowDown } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { MdShoppingCartCheckout } from "react-icons/md";

import { Link } from "react-router-dom";
import './nav.css';

const ShowCart = () => {
    let cart = document.querySelector('.shopping-cart');
    cart.classList.toggle('active');
}

const Nav = () => {
    const dataToSend = "Hii from Aman";
    return (
        <>
            <header>
                <div className="logo">
                    <img src="/images/logo.png" alt=""></img>
                </div>
                <input type="checkbox" id="nav_check" hidden></input>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <form className="search-form">
                                <input type="search" id="search-box" placeholder="Search Products" name="product"></input>
                                <Link className="search-button"to={`/Products/${dataToSend}`}>
                                    <label><FaSearch  size={17} /></label>
                                </Link>
                            </form>
                        </li>
                        <li>
                            <Link to="/login"><FaUserCircle size={20} /></Link>
                        </li>
                        <li>
                            <button onClick={ShowCart}><FaCartArrowDown size={20} /></button>
                        </li>
                    </ul>
                </nav>
                <label for="nav_check" className="hamburger">
                    <GiHamburgerMenu size={20} />
                </label>

                <div className="shopping-cart">
                    <div className="cart-box">
                        <ImBin2 size={20} className="bin-btn"/>
                        <img src="/images/logo.png" alt=""></img>
                        <div className="cart-content">
                            <h3 className="cart-product-title">Woodland Shoe</h3>
                            <span className="cart-product-price">$120.00/-</span>
                            <span className="cart-product-qty">Qty : 1</span>
                        </div>
                    </div>
                    <div className="cart-box">
                        <ImBin2 size={20} className="bin-btn"/>
                        <img src="/images/slippers/slippers3.png" alt=""></img>
                        <div className="cart-content">
                            <h3 className="cart-product-title">Woodland Shoe</h3>
                            <span className="cart-product-price">$120.00/-</span>
                            <span className="cart-product-qty">Qty : 2</span>
                        </div>
                    </div>
                    <div className="cart-total">
                        Total Amount : $360.00 + G.S.T 
                    </div>
                    <Link className="cart-checkout-btn"to={`/Checkout`}>
                        Checkout
                        <MdShoppingCartCheckout size={20}/>
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Nav;