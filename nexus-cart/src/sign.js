import React from "react";
import { FaUserCircle, FaCartArrowDown, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './sign.css';
const Sign = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-form-container sign-up">
                    <form className="login-form" action="" method="post">
                        <h2>sign up</h2>
                        <div className="form-group">
                            <input type="text" name="username" required></input>
                            <FaUserCircle size={25} className="react-icon" />
                            <label for="">username</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" required></input>
                            <MdAlternateEmail size={25} className="react-icon" />
                            <label for="">email</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="password" required></input>
                            <FaLock size={25} className="react-icon" />
                            <label for="">password</label>
                        </div>
                        <div className="form-group">
                            <input type="text" required></input>
                            <FaLock size={25} className="react-icon" />
                            <label for="">confirm password</label>
                        </div>
                        <button type="submit" className="btn">sign up</button>
                        <div className="link">
                            <p>You already have an account</p>
                            <a href="#" className="signin-link">sign in</a>
                        </div>
                    </form>
                </div>
                <div className="login-form-container sign-in">
                    <form className="login-form" action="" method="post">
                        <h2>Login</h2>
                        <div className="form-group">
                            <input type="text" name="username" required></input>
                            <FaUserCircle size={25} className="react-icon" />
                            <label for="">username</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="password" required></input>
                            <FaLock size={25} className="react-icon" />
                            <label for="">password</label>
                        </div>
                        <div className="forgot-pass">
                            <a href="#">forgot password?</a>
                        </div>

                        {/* Error message will be included here */}
                        <button type="submit" className="btn">login</button>
                        <div className="link">
                            <p>Dont't have an account?</p>
                            <a href="#" className="signup-link">sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

let wrapper = document.querySelector('.login-wrapper');
let signUpLink = document.querySelector('.link .signup-link');
let signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

export default Sign;