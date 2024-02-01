import React,{useState} from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom";

import './sign.css';

const Sign = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const registerUser = async ()=>{
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            }  
        })
        result = await result.json();
        localStorage.setItem("user",JSON.stringify(result));
        const username = result.name;
        if(result){
            navigate(`/${username}`);
        }
    }
    
    const loginUser = async ()=>{
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({name,password}),
            headers:{
                'Content-Type': 'application/json'
            }  
        })
        result = await result.json();
        localStorage.setItem("user",JSON.stringify(result));
        const username = result.name;
        if(result){
            navigate(`/${username}`);
        }
    }

    return (        
        <div className="login">
            <div className="login-wrapper">
                <div className="login-form-container sign-up">
                    <div className="login-form" action="">
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
                        <button className="btn" onClick={registerUser}>sign up</button>
                        <div className="link">
                            <p>You already have an account</p>
                            <a href="#" className="signin-link" onClick={showSignIn}>sign in</a>
                        </div>
                        <Link to="/">Go Back</Link>
                    </div>
                </div>
                <div className="login-form-container sign-in">
                    <div className="login-form" action="">
                        <h2>Login</h2>
                        <div className="form-group">
                            <input type="text" name="username" onChange={(e)=>setName(e.target.value)} required></input>
                            <FaUserCircle size={25} className="react-icon" />
                            <label for="">username</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} required></input>
                            <FaLock size={25} className="react-icon" />
                            <label for="">password</label>
                        </div>
                        <div className="forgot-pass">
                            <a href="#">forgot password?</a>
                        </div>

                        {/* Error message will be included here */}
                        <button type="submit" className="btn" onClick={loginUser}>login</button>
                        <div className="link">
                            <p>Dont't have an account?</p>
                            <a href="#" className="signup-link" onClick={showSignUp}>sign up</a>
                            <br></br>
                        </div>
                        <Link to="/">Go Back</Link>
                    </div>
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