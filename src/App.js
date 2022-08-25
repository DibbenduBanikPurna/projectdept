import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Settings from './Components/Settings/Settings';
import SinglePost from './Components/SinglePost/SinglePost';
import Write from './Components/Write/Write';
import updatePost  from './Components/updatePost/UpdatePost';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blog/:id" element={<updatePost/>}> </Route>
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
