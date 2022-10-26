import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const IndividualCourse = () => {
    const coursesDetails = useLoaderData()
    const {details,price,img,name} = coursesDetails
    return (
        <div className='container my-5 shadow rounded'>
            <Card className='border-0 p-2'>
                <Card.Img variant="top" height={'400px'} className='rounded-2' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                       <p>price :  {price}</p>
                    </Card.Text>
                    <Button variant="primary">Get Primium Acces</Button>
                </Card.Body>
             </Card>
        </div>
    );
};

export default IndividualCourse;