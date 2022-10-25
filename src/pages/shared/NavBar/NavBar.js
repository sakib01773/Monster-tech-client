import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"

import  logo  from '../../../Assets/logo.png';
const NavBar = () => {
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;