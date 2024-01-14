import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch,FaUserCircle,FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import './nav.css';
const Nav = () => {
    const dataToSend = "Hii from Aman";
    return (
        <>
            <header>
                <div className="logo">
                    <img src="./images/logo.png" alt=""></img>
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
                            <a href=""><FaCartArrowDown size={20} /></a>
                        </li>
                    </ul>
                </nav>
                <label for="nav_check" className="hamburger">
                    <GiHamburgerMenu size={20} />
                </label>
            </header>
        </>
    )
}

export default Nav;