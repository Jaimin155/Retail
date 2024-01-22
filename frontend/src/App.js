import React from 'react'
import {Routes,Route}from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/About';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Contactus from './pages/Contactus';
function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contactus" element ={<Contactus/>}/>
        <Route path="/policy" element ={<Policy/>}/>
        <Route path="/*" element ={<Pagenotfound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
