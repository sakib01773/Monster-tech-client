import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='w-50 m-auto mt-5 border shadow rounded-4 p-4'>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <p>don't have Account? <Link to={"/register"}>Register</Link></p>
                </div>
                <Button type="submit">Sign in</Button>
            </Form>
            </div>
        </div>
    );
};

export default Login;