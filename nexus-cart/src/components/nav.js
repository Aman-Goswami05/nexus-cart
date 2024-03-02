import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch,FaUserCircle,FaCartArrowDown } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext';

const Nav = () => { 
    const [cart,setCart] = useState([]);
    const [amount,setAmount] = useState(0);
    const { username } = useAuth();
    
    const ShowProfile = () => {
        var profileBox = document.querySelector('#profile');
        profileBox.classList.toggle('active');
    }
    
    const ShowCart = () => {
        var cartBox = document.querySelector('#shopping-cart');
        cartBox.classList.toggle('active');
        if(username){
            fetch('http://localhost:5000/getCart',{
                method: "post",
                crossDomain: "true",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username})
            }).then((res) => res.json())
            .then((data)=>{
                console.log(data);
                let x = 0;
                for(let i=0;i<data.length;i++){
                    x += data[i].price;
                }
                setAmount(x);
                setCart(data);
            });
        }    
    }

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
                            <a href="/">About</a>
                        </li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
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

                <div id="shopping-cart">
                    {
                        cart.map(item => {
                            return (
                                <div className="cart-box">
                                    <ImBin2 size={20} className="bin-btn"/>
                                    <img src="/images/logo.png" alt=""></img>
                                    <div className="cart-content">
                                        <h3 className="cart-product-title">{item.title}</h3>
                                        <span className="cart-product-price">{item.price}-</span>
                                        <span className="cart-product-qty">Qty : {item.quantity}</span>
                                    </div>
                                </div>     
                            )
                        })
                    }
                    <div className="cart-total">
                        Total Amount : ${amount} 
                    </div>
                    <Link className="cart-checkout-btn" to={`/Checkout`}>
                        Checkout
                        <MdShoppingCartCheckout size={20}/>
                    </Link>
                </div>

                <div id="profile">
                    <div className="profile-box">
                        <IoPersonCircle size={70}/>
                        <h3>{username}</h3>
                    </div>
                    {username==null?
                        <Link className="sign-btn" to={`/login`}>
                            Sign in
                            <FaSignInAlt size={20}/>
                        </Link>:
                        <Link className="sign-btn" to={`/Checkout`}>
                            Sign out
                            <FaSignOutAlt size={20}/>
                        </Link>                    
                    }
                </div>
            </header>
        </>
    )
}

export default Nav;