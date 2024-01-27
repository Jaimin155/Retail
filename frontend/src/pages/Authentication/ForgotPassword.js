import React, {  useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import toast from "react-hot-toast";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPass, setNewPass] = useState("");
    const [answer, setAnswer] = useState("");
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
            const response = await axios.post('http://localhost:8080/api/v1/auth/forgot-password', { email, newPass ,answer});
            const result = response.data;

            if (result) {
                toast.success('Login successful');
                Navigate("/login");
            }
            else {
                toast.error(result.message);
            }
        }
        catch (error) {
            console.log(error);
            toast.error('Login failed. Please try again.');
        }
    };
    return (
        <Layout title={'Forgot Password'}>
            <div className='Login'>
                <div className='form_container'>
                    <Form noValidate validated={validated}>
                        <h3 className='text-center'>Reset Password</h3>

                        <Form.Group className='mb-2' controlId='validationCustom01'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type='email' placeholder='Enter Email' className='form-control' value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                            <div className='invalid-feedback'>Please provide a valid email.</div>
                            <div className='valid-feedback'>Looks Good!</div>
                        </Form.Group>

                        <Form.Group className='mb-2' controlId='validationCustom01'>
                            <Form.Label>Answer</Form.Label>
                            <Form.Control required type='text' placeholder='Enter your favorite colour?' className='form-control' value={answer}
                                onChange={(event) => setAnswer(event.target.value)} />
                            <div className='invalid-feedback'>Please provide a valid email.</div>
                            <div className='valid-feedback'>Looks Good!</div>
                        </Form.Group>

                        <Form.Group className='mb-2' controlId='validationCustom02'>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control required type='password' placeholder='Enter New Password' className='form-control' value={newPass}
                                onChange={(event) => setNewPass(event.target.value)} />
                            <div className='invalid-feedback'>Please provide a valid password.</div>
                            <div className='valid-feedback'>Looks Good!</div>
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Check type='checkbox' className='custom-control custom-checkbox' id='check' label={<span className='custom-input-label ms-2'>Remember me</span>} />
                        </Form.Group>

                        <div className='d-grid'>
                            <Button type='submit' className='btn btn-success' onClick={handleSubmit}> Reset </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}
export default ForgotPassword