import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
//import Side from '../../../image/Screenshot_20.png'
const Sidebar = () => {
    return (
        <div>
            <div>
            <h4>ABOUT ME</h4>
            <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
            </div>
           <div>
           <p>lorem ipsum dolor sit. aet</p>
           </div>
           
            <h4>CATEGORIES</h4>
            
                <li>Life</li>
                <li>Music</li>
                <li>style</li>
                <li>Sport</li>
                <li>Tech</li>
                <li>Cinema</li>
            
            <div>
                <h4>Follow Us</h4>
                <a className='m-2 text-secondary' target="blank" rel='no-relation' href="/"><FaFacebook /></a>
          <a className='m-2 text-secondary' target="blank" href="/"><FaTwitter /></a>
          <a className='m-2 text-secondary' target="blank" href="/"><FaInstagram /></a>
            </div>
        </div>
    );
};

export default Sidebar;