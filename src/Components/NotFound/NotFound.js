import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/3828541.jpg'
const NotFound = () => {
    return (
        <div className='container'>
            <div className='col-md-6 m-auto'>
            <img className='img-fluid' src={image} alt=""/>
          <Link to="/"> <button className='btn btn-warning'>Retun To Home</button></Link> 
            </div>
           
        </div>
    );
};

export default NotFound;