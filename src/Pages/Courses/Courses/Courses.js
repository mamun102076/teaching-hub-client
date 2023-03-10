import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CaourseCard from '../CaourseCard/CaourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const category = useLoaderData()
    return (
        <div className='courses'>
            <Container fluid>
                <Row>
                    <Col lg='3'>
                        <div className='courses-left mt-3'>
                            {
                                category.map(category => <LeftSideNav key={category.id} category={category}></LeftSideNav>)
                            }
                        </div>
                    </Col>
                    <Col lg='9'>
                        <h1 className='text-center my-3'>All our courses</h1>
                        <Row>
                            {
                                category.map(category => <CaourseCard key={category.id} category={category}></CaourseCard>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;