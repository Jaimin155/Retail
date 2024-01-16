import React from 'react'
import {Routes,Route}from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/About';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Contactus from './pages/Contactus';
function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element ={<HomePage/>}></Route>
        <Route path="/about" element ={<About/>}></Route>
        <Route path="/contactus" element ={<Contactus/>}></Route>
        <Route path="/policy" element ={<Policy/>}></Route>
        <Route path="/*" element ={<Pagenotfound/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/Login" element ={<Login/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
