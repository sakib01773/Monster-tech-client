import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courses, SetCourses] = useState([])
    useEffect(() => {
        fetch('https://monster-tech-website-server.vercel.app/course')
        .then(res => res.json())
        .then(data => SetCourses(data))
    },[])
    return (
        <div className='p-3 shadow mb-5'style={{position:"sticky", top:"40px"}}>
            <h2 className='my-3'>All Courses</h2>
            {
                courses.map(course => <p key={course.id}><Link to={`/course/${course.id}`}><Button variant="outline-info" className='w-100 fw-bold'>{ course.name}</Button>{' '}</Link></p> 
                    
                )
            }
        </div>
    );
};

export default LeftSide;