import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import toast from "react-hot-toast";
import {useAuth} from "../../context/auth"

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [auth,setAuth]=useAuth();
  const [validated, setValidated] = useState(false);
  const Navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', { email, pass });
      const result = response.data;
      
      if (result) {
        toast.success('Login successful');
        setAuth({
          ...auth,
          user:result.user
        });
        localStorage.setItem('auth',JSON.stringify(result));
        Navigate("/");
      }
      else{
        toast.error(result.message);
      }
    }
    catch (error) {
      console.log(error);
      toast.error('Login failed. Please try again.');
    }  
  };

  return (
    <Layout title={"Login"}>
      <div className='Login'>
        <div className='form_container'>
          <Form noValidate validated={validated}>
            <h3 className='text-center'>Log In</h3>

            <Form.Group className='mb-2' controlId='validationCustom01'>
              <Form.Label>Email</Form.Label>
              <Form.Control required type='email' placeholder='Enter Email' className='form-control' value={email}
                onChange={(event) => setEmail(event.target.value)}/>
              <div className='invalid-feedback'>Please provide a valid email.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2' controlId='validationCustom02'>
              <Form.Label>Password</Form.Label>
              <Form.Control required type='password' placeholder='Enter Password' className='form-control'  value={pass}
                onChange={(event) => setPass(event.target.value)} />
              <div className='invalid-feedback'>Please provide a valid password.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Check type='checkbox' className='custom-control custom-checkbox' id='check' label={<span className='custom-input-label ms-2'>Remember me</span>} />
            </Form.Group>

            <div className='d-grid'>
              <Button type='submit' className='btn btn-success' onClick={handleSubmit}> Log in </Button>
            </div>

            <p className='text-end mt-2'>Forgot <a href=''>Password?</a>
              <Link to='/signup' className='ms-2' onClick={handleSubmit}> Sign up</Link>
            </p>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
