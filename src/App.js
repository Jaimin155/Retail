import React from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './Component/Login';
import Signup from './Component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (


    
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
