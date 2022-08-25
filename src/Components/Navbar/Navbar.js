import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter,FaSearch, FaInstagram, FaFacebook } from 'react-icons/fa';
import UseFirebase from '../../Auth/UseFirebase/UseFirebase';
import ava from '../../image/ava.png'
const Navbar = () => {
  const {LogOut,user}=UseFirebase()
  console.log(user)
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">B L O G</Link>
          <a className='m-2 text-secondary' target="blank" rel='no-relation' href="/"><FaFacebook /></a>
          <a className='m-2 text-secondary' target="blank" href="/"><FaTwitter /></a>
          <a className='m-2 text-secondary' target="blank" href="/"><FaInstagram /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
             
              <li className="nav-item">
                <Link className="nav-link text-secondary " aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/about">ABOUT</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link text-secondary " to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/write">WRITE</Link>
              </li>
              {/* <li className="nav-item">
             { user.email ? <span>LOGOUT</span> : ""}
              </li> */}
             
            </ul>
            <form className="d-flex" role="search">
             <Link to="/settings"><img style={{height:'30px'}} src={user.photoURL}  alt=""/></Link> 
              <ul className="navbar-nav m-auto">
              { user.email  ? <span className='btn btn-sm btn-danger' onClick={LogOut}>LOGOUT</span> : <>  <Link className="nav-link text-secondary" to="/register">REGISTER</Link>
            
              <li className="nav-item">
                <Link className="nav-link text-secondary " to="/login">LOGIN</Link>
              </li>
 </>              }
              </ul>
              {/* <button className="btn btn-outline-success" type="submit"><FaSearch/></button> */}
            </form>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;