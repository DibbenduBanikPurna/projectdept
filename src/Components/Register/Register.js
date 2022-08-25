import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Auth/UseFirebase/UseFirebase';
import './Register.css'
const Register = () => {
  const [user,setUser]=useState({})
  const {SignUp,googleSignUp}=UseFirebase()

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
    SignUp(user.name,user.email,user.password)
    
    setUser({})

  }
  
    return (
        <div className="register">
       <span className="registerTitle">Register</span> 
        <form onSubmit={handleSubmit} className="registerForm">
          <label>Username</label>
          <input className="registerInput" name="name" onBlur={handleBlur} type="text" placeholder="Enter your username..." />
          <label>Email</label>
          <input className="registerInput" name="email" onBlur={handleBlur} type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="registerInput" name="password" onBlur={handleBlur} type="password" placeholder="Enter your password..." />
          <button type='submit' className="registerButton">Register</button>
        </form>
         <Link to="/login"> <button className="registerLoginButton">Login</button> </Link>
        <hr/>
         <button onClick={googleSignUp} className='btn btn-warning'>Google Sign up</button>
      </div>
    );
};

export default Register;