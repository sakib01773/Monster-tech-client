import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPrint from "react-to-print"
import { useRef } from 'react';


const IndividualCourse = () => {
    const ref = useRef()
    const coursesDetails = useLoaderData()
    const {details,price,img,name,_id} = coursesDetails
    return (
        <div ref={ref} className='container'>
            <div className='my-5 d-flex justify-content-between flex-column  flex-lg-row px-3'>
                <h1 >Learn {name} With Monster Tech</h1>
                <ReactPrint trigger={()=><button>download</button>} content={()=>ref.current}></ReactPrint>
            </div>
            <div className=' my-5 shadow rounded'>
            <Card className='border-0 p-2'>
                <Card.Img variant="top" height={'500px'} className='rounded-5 p-2' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                       <p>price :  {price} taka</p>
                    </Card.Text>
                    <Link to={`/checkout/${_id}`}><Button variant="primary">Get Primium Acces</Button></Link>
                </Card.Body>
             </Card>
            </div>
        </div>
    );
};

export default IndividualCourse;