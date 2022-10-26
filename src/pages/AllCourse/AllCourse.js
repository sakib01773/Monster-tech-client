import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const AllCourse = () => {
    const [courseDetails , setCourseDetails] = useState([])
    useEffect(() => {
        fetch('https://monster-tech-website-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourseDetails(data))
    },[])
    return (
        <div className='row g-5'>
            {
                courseDetails.map((courseDetail,idx) => <CourseCard key={idx} courseDetail={courseDetail}></CourseCard>)
           }
        </div>
    );
};

export default AllCourse;