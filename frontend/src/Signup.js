import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import './style.css'

function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-secondary bg-gradient'>
      <div className='form_container p-5 rounded bg-white'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
            <Form.Group className='mb-2' controlId='validationCustom01'>
              <Form.Label>Name</Form.Label>
              <Form.Control required type='text' placeholder='Enter Name' className='form-control'/>
              <div className='invalid-feedback'>Please provide a valid Name.</div>
            <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

          <Form.Group className='mb-2' controlId='validationCustom03'>
            <Form.Label>Email</Form.Label>
            <Form.Control required type='email'
              placeholder='Enter Email'
              className='form-control'
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
            />
            <div className='invalid-feedback'>Please provide a valid password.</div>
            <div className='valid-feedback'>Looks Good!</div>
          </Form.Group>

          <div className='d-grid'>
            <Button type='submit' className='btn btn-success'>
              Sign Up
            </Button>
          </div>
          <p className='text-end mt-2'>
            Already Registered<Link to='/' className='ms-2'>
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
