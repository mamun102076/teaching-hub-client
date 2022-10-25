import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const category = useLoaderData()
    console.log(category)
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    {
                       category.map( category => <LeftSideNav key={category.id} category={category}></LeftSideNav>)
                    }
                </Col>
                <Col lg='9'>
                    <h2>this is column 2</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;