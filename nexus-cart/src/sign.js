import React,{useState} from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './sign.css';

const Sign = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const collectData = ()=>{
        console.warn(name,email,password);
    }
    return (        
        <div className="login">
            <div className="login-wrapper">
                <div className="login-form-container sign-up">
                    <form className="login-form" action="">
                        <h2>sign up</h2>
                        <div className="form-group">
                            <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)} required></input>
                            <FaUserCircle size={25} className="react-icon" />
                            <label htmlFor="">username</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                            <MdAlternateEmail size={25} className="react-icon" />
                            <label htmlFor="">email</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                            <FaLock size={25} className="react-icon" />
                            <label htmlFor="">password</label>
                        </div>
                        <div className="form-group">
                            <input type="text" required></input>
                            <FaLock size={25} className="react-icon" />
                            <label htmlFor="">confirm password</label>
                        </div>
                        <button className="btn" onClick={collectData}>sign up</button>
                        <div className="link">
                            <p>You already have an account</p>
                            <a href="#" className="signin-link" onClick={showSignIn}>sign in</a>
                        </div>
                    </form>
                </div>
                <div className="login-form-container sign-in">
                    <form className="login-form" action="">
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
                            <a href="#" className="signup-link" onClick={showSignUp}>sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const showSignIn = ()=>{    
    let wrapper = document.querySelector('.login-wrapper');
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
}

const showSignUp = ()=>{
    let wrapper = document.querySelector('.login-wrapper');
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
}

export default Sign;