import React from 'react';
import { Button } from 'react-bootstrap';
import {  Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = ({ category }) => {
    const coursedetails = useLoaderData()
    console.log(category)
    return (
        <div className='coursedetails my-4'>
            <div className='d-flex justify-content-between mb-4'>
                <h3>{coursedetails.title}</h3>
                <Button variant="outline-secondary">Dwonload PDF</Button>
            </div>
            <img src={coursedetails.image_url} alt="" />
            <div className='mt-4'>
                <h3>Description</h3>
                <p>{coursedetails.details}</p>
            </div>
            <Button variant="danger"><Link to='/checkout'>Get premium access</Link></Button>
        </div>
    );
};

export default CourseDetails;