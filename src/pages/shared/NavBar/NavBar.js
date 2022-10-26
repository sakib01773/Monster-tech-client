import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import  logo  from '../../../Assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Button } from 'react-bootstrap';
const NavBar = () => {
    const [open,setOpen]=useState(true)

    const { user, logOut } = useContext(AuthContext)
    
    const logoutAll = () => {
        logOut()
        .then(() => { })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Monster Tech Courses
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5 ss">
                            <Link to={"/course"}>Course</Link>
                            <Link to={"/faq"}>FAQ</Link>
                            <Link to={"/blog"}>Blog</Link>
                        </Nav>
                        <Nav className='ms-auto'>
                        <div onClick={()=>setOpen(!open)} className="mx-4">
                                {
                                    open ? <MdOutlineLightMode className='fs-3 pt-1'></MdOutlineLightMode> : 
                                       <MdDarkMode className='fs-3 pt-1'></MdDarkMode> 
                                }
                        </div>
                            {
                                user?.uid ? <>
                                    <img className='mx-5' style={{ height: '30px', width:"30px" }} src={user?.photoURL} alt="" />
                                    <Link to={"/"}><Button className='mx-3' onClick={logoutAll} variant="outline-dark">Logout</Button></Link>
                                </> :
                                    <>
                                        <Link className='mx-2' to={"/login"}><Button variant="outline-dark">Login</Button> </Link>
                                        <Link to={"/register"}><Button variant="outline-dark">Register</Button></Link>
                                    </>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;