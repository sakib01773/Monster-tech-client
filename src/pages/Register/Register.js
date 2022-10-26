import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Register = () => {
    return (
        <div className='container'>
            <div className='w-50 m-auto mt-5 border shadow rounded-4 p-4'>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupUrl">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="url" placeholder="your photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit">Register</Button>
            </Form>
            </div>
        </div>
    );
};

export default Register;