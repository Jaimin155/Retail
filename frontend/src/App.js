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
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Authentication/ForgotPassword';
function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/dashboard" element={<PrivateRoute/>}>
           <Route path="" element={<Dashboard/>}/>
        </Route>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/forgot-password" element ={<ForgotPassword/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contactus" element ={<Contactus/>}/>
        <Route path="/policy" element ={<Policy/>}/>
        <Route path="/*" element ={<Pagenotfound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
