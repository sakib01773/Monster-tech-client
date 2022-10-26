import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const RightSide = () => {
    const courseDetails = useLoaderData()
    return (
        <div>
            <div className='row g-5'>
                {
                  courseDetails.map((courseDetail,idx)=><CourseCard key={idx} courseDetail={courseDetail}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default RightSide;