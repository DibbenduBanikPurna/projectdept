import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';

const Posts = () => {
    const [post,setPost]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPost(data);
        })

    },[])
      


    return (
        <div className='row mt-4'>
            <div className="col-md-8">
                {
                    post.map((post)=>{
                        return  <Post post={post}/>
                    })
                }
           
            </div>
            <div className='col-md-4'>
                <Sidebar/>
            </div>
            
        </div>
    );
};

export default Posts;