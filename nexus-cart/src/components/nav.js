import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch,FaUserCircle,FaCartArrowDown } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowCart = () => {
    let cart = document.querySelector('.shopping-cart');
    let profile = document.querySelector('.profile');
    cart.classList.toggle('active');
    // profile.style.display='none';
}

const ShowProfile = () => {
    let cart = document.querySelector('.shopping-cart');
    let profile = document.querySelector('.profile');
    profile.classList.toggle('active');
    // cart.style.display='none';
}

const Nav = () => { 
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
                        <li className="search-form">
                            <input type="search" id="search-box" placeholder="Search Products" name="product"></input>
                            <Link className="search-button"to={`/Products/Search/Bammi`}>
                                <label><FaSearch  size={17} /></label>
                            </Link>
                        </li>
                        <li>
                            <button onClick={ShowProfile}><FaUserCircle size={20} /></button>
                            {/* <Link to="/login"><FaUserCircle size={20} /></Link> */}
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
                    <div className="cart-total">
                        Total Amount : $360.00 + G.S.T 
                    </div>
                    <Link className="cart-checkout-btn" to={`/Checkout`}>
                        Checkout
                        <MdShoppingCartCheckout size={20}/>
                    </Link>
                </div>

                <div className="profile">
                    <div className="profile-box">
                        <IoPersonCircle size={70}/>
                        <h3>Aman Goswami</h3>
                    </div>
                    <Link className="sign-btn" to={`/login`}>
                        Sign in
                        <FaSignInAlt size={20}/>
                    </Link>

                    {/* <Link className="sign-btn" to={`/Checkout`}>
                        Sign out
                        <FaSignOutAlt size={20}/>
                    </Link> */}
                </div>
            </header>
        </>
    )
}

export default Nav;