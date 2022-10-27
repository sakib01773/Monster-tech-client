import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {


    const { googleProviderLogin, signIn,gitHubProviderLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                // toast.success('Successfully created!');
            })
            .catch(error => console.error(error))
    }


    const handleGitHubSignIn = () =>{
        gitHubProviderLogIn(gitHubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, { replace: true })
            // toast.success('Successfully created!');
        })
        .catch(error => console.error(error))
    }


    



    const handleSignIn = (event) => {
        event.preventDefault()
        const from = event.target
        const email = from.name.value;
        const password = from.name.value;
        console.log(email, password)
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            // form.reset()
            navigate(from, { replace: true })
            // toast.success("Log In Successfully..")
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <div className='w-75 m-auto mt-5 border shadow rounded-4 p-4'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <div>
                        <p>don't have Account? <Link to={"/register"}>Register</Link> or <br /></p>
                        <p>Login with: <button className='border-0 bg-white fs-3' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button> <button className='border-0 bg-white fs-3' onClick={handleGitHubSignIn}><FaGithub></FaGithub></button></p>
                </div>
                <Button type="submit">Sign in</Button>
            </Form>
            </div>
        </div>
    );
};

export default Login;