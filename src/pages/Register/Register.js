
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';


const Register = () => {


    const { createUser } = useContext(AuthContext);



    const handler = (event) => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photoURL, email, password)
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <div className='w-75 m-auto mt-5 border shadow rounded-4 p-4'>
                <Form onSubmit={handler}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupUrl">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="your photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button type="submit">Register</Button>
            </Form>
            </div>
        </div>
    );
};

export default Register;