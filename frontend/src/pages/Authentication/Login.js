import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';

function Login() {
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
    <Layout title={"Login"}>
      <div className='Login'>
        <div className='form_container'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3 className='text-center'>Log In</h3>

            <Form.Group className='mb-2' controlId='validationCustom01'>
              <Form.Label>Email</Form.Label>
              <Form.Control required type='email' placeholder='Enter Email' className='form-control' />
              <div className='invalid-feedback'>Please provide a valid email.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2' controlId='validationCustom02'>
              <Form.Label>Password</Form.Label>
              <Form.Control required type='password' placeholder='Enter Password' className='form-control' />
              <div className='invalid-feedback'>Please provide a valid password.</div>
              <div className='valid-feedback'>Looks Good!</div>
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Check type='checkbox' className='custom-control custom-checkbox' id='check' label={<span className='custom-input-label ms-2'>Remember me</span>} />
            </Form.Group>

            <div className='d-grid'>
              <Button type='submit' className='btn btn-success'> Log in </Button>
            </div>

            <p className='text-end mt-2'>Forgot <a href=''>Password?</a>
              <Link to='/signup' className='ms-2'> Sign up</Link>
            </p>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
