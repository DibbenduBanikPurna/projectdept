import React from 'react';
import { Link } from 'react-router-dom';
//import img from '../../../image/india.jpg'
const Post = ({post}) => {
    
   
    return (
        <div className="post">
        <img
          className="img-fluid"
          style={{height:'350px'}}
          src={`data:image/jpeg;base64,${post.image}`}
          alt=""
        />
        <div className="postInfo">
          {/* <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div> */}
          <span className="postTitle">
            <Link to={`post/${post._id}`} className="link">
              {post.title}
            </Link>
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
         {post.message}
        </p>
      </div>
    );
};

export default Post;