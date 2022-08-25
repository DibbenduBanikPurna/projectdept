import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UseFirebase from '../../Auth/UseFirebase/UseFirebase';
import Sidebar from '../Home/Sidebar/Sidebar';
import './Singlepost.css'
import { FaTrash,FaEdit } from 'react-icons/fa';
const SinglePost = () => {
  const [singleBlog,setSingleBlog]=useState({})
  const {user}=UseFirebase();
  const {id}=useParams()
  const navigate = useNavigate()
 // console.log(id)
  useEffect(()=>{
    fetch(`http://localhost:5000/blog/${id}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setSingleBlog(data)
    })
  },[id])

  const update=(id)=>{
    navigate({ pathname: `/blog/${id}` })


  }
  const deletePost=(id)=>{
    console.log(id)
    fetch(`http://localhost:5000/blog/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      alert(data);
      setSingleBlog({})
    })
    

  }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
        <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={`data:image/jpeg;base64,${singleBlog.image}`}
            alt=""
          />
          <h1 className="singlePostTitle">
           {singleBlog.title}
            <div className="singlePostEdit">
              <span onClick={()=>update(singleBlog.title)}> <FaEdit/> </span>
              
              <span onClick={()=>deletePost(singleBlog.title)}> <FaTrash/></span>
             
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:{user.displayName}
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
           {singleBlog.message}
          </p>
        </div>
      </div>
      </div>
      <div className='col-md-4'>
        <Sidebar/>
      </div>
      </div>
      </div>
    );
};

export default SinglePost;