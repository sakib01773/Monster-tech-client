import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../../Assets/notfound.jpg"

const NotFound = () => {
    return (
        
        <div className='m-auto'>
            <div style={{height: '100vh'}} className='d-flex justify-content-center bg-light align-item-center'>
            <div className='my-5 pt-5'>
            <img src={notfound} alt="" />
            <h2>404- PAGE NOT FOUND</h2>
            <p>This page you are lokking for might have been removed had its name changed or is temporarily unavaviable.</p>
            <button><Link to={"/home"}>Go to Homepage</Link></button>
            </div>
        </div>
        
        </div>
    );
};

export default NotFound;