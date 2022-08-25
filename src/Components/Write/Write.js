import React, { useState } from 'react';
import './Write.css'
const Write = () => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(null)
  
  // const handleBlur=(e)=>{
  //   const field = e.target.name;
  //   const value = e.target.value
  //   const newData = { ...blogPost };
  //   newData[field] = value
  //   setBlogPost(newData)
  
  // }

  const handleSubmit=(e)=>{
    e.preventDefault()
        console.log(image)
        if (!image) {
            alert('image select please!')
            return
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('message', message)
        formData.append('image', image)
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log('doctor added successfully')
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
  }

    return (
        <div className="write">
        <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
        <form onSubmit={handleSubmit} className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input   
            id="fileInput"
          onChange={(e) => setImage(e.target.files[0])} type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              name="title"
              onBlur={(e) => setTitle(e.target.value)}
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              name="message"
              onBlur={(e) => setMessage(e.target.value)}
              autoFocus={true}
            />
          </div>
          <button  className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
};

export default Write;