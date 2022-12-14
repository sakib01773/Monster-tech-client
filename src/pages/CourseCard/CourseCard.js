import React from 'react';
import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ courseDetail }) => {
    const {name,img,_id} = courseDetail
    return (
        <div className='col-12 col-lg-6'>
                    
            <Card className='p-3 rounded-4'>
                <Card.Img className='rounded-5 ' height={'400px'} variant="top" src={img} />
                 <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/courses/${_id}`}><Button className='w-100 fw-bold' variant="outline-info">Course Details</Button>{' '} </Link>
                </Card.Body>
            </Card>
            
                
        </div>
    );
};

export default CourseCard;