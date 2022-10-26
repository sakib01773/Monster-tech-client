import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courses, SetCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course')
        .then(res => res.json())
        .then(data => SetCourses(data))
    },[])
    return (
        <div>
            <h2>All Courses</h2>
            {
                courses.map(course => <p key={course.id}><Link to={`/course/${course.id}`}>{ course.name}</Link></p> 
                    
                )
            }
        </div>
    );
};

export default LeftSide;