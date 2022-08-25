import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Auth/UseFirebase/UseFirebase';
import './Login.css'
const Login = () => {
  const [user,setUser]=useState({})
  const {SignIn,googleSignUp}=UseFirebase()

  const handleBlur=(e)=>{
    const field = e.target.name;
        const value = e.target.value
        const newData = { ...user };
        newData[field] = value
        setUser(newData)
        

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user)
    SignIn(user.email,user.password)

  }
    return (
        <div className="login">
    <span  className="loginTitle">Login</span> 
        <form onSubmit={handleSubmit} className="loginForm">
          <label>Email</label>
          <input onBlur={handleBlur} name="email" className="loginInput" type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input onBlur={handleBlur}  name="password" className="loginInput" type="password" placeholder="Enter your password..." />
          <button type='submit' className="loginButton">Login</button>
        </form>
         <Link to="/register"> <button className="loginRegisterButton">Register</button> </Link> 
         <hr/>
         <button onClick={googleSignUp} className='btn btn-warning'>Google Sign up</button>
      </div>
    );
};

export default Login;