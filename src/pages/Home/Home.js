import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import carro_1 from "../../Assets/carro-1.jpg"
import carro_2 from "../../Assets/carro-2.jpg"
import carro_3 from "../../Assets/carro-3.jpg"
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item  className=' pp' >
                <img
                className="d-block w-100 sakib"
                src={carro_3}
                alt="First slide"
                />
                <Carousel.Caption className='ss'>
                <h2>Want to be Software Enginneer?</h2>
                        <p>Monster Tech Courses where you can  You'll learn new programming languages, new ways to use old languages and new tools to make development easier. In addition, you'll be able to learn new things about the industry you are working in.</p>
                        <Link to={'/course'}><Button variant="info" size="lg"> Get Started</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 sakib"
                src={carro_1}
                alt="Second slide"
                />

                <Carousel.Caption className='ss'>
                <h2>Want to be a Ethical Hacker?</h2>
                        <p>Monster Tech Courses where you can  You'll learn new programming languages, new ways to use old languages and new tools to make development easier. In addition, you'll be able to learn new things about the industry you are working in.</p>
                        <Link to={'/course'}><Button variant="info" size="lg"> Get Started</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 sakib"
                src={carro_2}
                alt="Third slide"
                />

                <Carousel.Caption className='ss'>
                <h2>Want to be a web Engineer?</h2>
                        <p>Monster Tech Courses where you can  You'll learn new programming languages, new ways to use old languages and new tools to make development easier. In addition, you'll be able to learn new things about the industry you are working in.</p>
                        <Link to={'/course'}><Button variant="info" size="lg"> Get Started</Button></Link>
                </Carousel.Caption>
                
                    
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;