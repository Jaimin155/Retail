import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import toast from "react-hot-toast";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', { name, email, pass });
      const result = response.data;
      if (result) {
        toast.success('Signup successful');
        Navigate('/login');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Signup failed. Please try again.');
    }  
  };
  return (
    <Layout title={"Sign Up"}>
      <div className='Signup'>
        <div className='form_container'>
          <Form noValidate validated={validated}>
            <h3 className='text-center'>Sign Up</h3>
            <Form.Group className='mb-2' controlId='validationCustom01'>
              <Form.Label>Name</Form.Label>
              <Form.Control required type='text' placeholder='Enter Name' className='form-control'
                value={name}
                onChange={(event) => setName(event.target.value)} />
              <div className='invalid-feedback'>Please provide a valid Name.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2' controlId='validationCustom03'>
              <Form.Label>Email</Form.Label>
              <Form.Control required type='email'
                placeholder='Enter Email'
                className='form-control'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className='invalid-feedback'>Please provide a valid email.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2' controlId='validationCustom04'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Enter Password'
                className='form-control'
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
              <div className='invalid-feedback'>Please provide a valid password.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <div className='d-grid'>
              <Button type='submit' className='btn btn-success' onClick={handleSubmit}>Sign Up</Button>
            </div>
            <p className='text-end mt-2'>Already Registered<Link to='/login' className='ms-2'>Login</Link></p>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
