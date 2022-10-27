import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const course = useLoaderData()
    const {name,_id,price} = course
    console.log(course)

    const handleSubmit = () =>{
        
        toast.success('Congartutaions payment successful ');
    }
    return (
       
        <div className='container my-5 py-5 shadow '>
            <h1> Course name: { name}</h1>
            <p>product id:{_id}</p>
            <p>price : { price} taka</p>
            <Button onClick={handleSubmit} variant="outline-dark">Confirm payment</Button>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Checkout;