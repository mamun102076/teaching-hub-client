import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CaourseCard.css'

const CaourseCard = ({ category }) => {

    return (
        <Col lg='6'>
            <Card className='coursecard mb-4'>
                <Card.Img style={{ height: '200px' }} variant="top" src={category.img}/>
                <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>{category.body}</Card.Text>
                    <Button variant="primary"><Link to={`/coursedetails/${category.id}`}>See Details</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CaourseCard;