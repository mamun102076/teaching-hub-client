import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CaourseCard from '../CaourseCard/CaourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const category = useLoaderData()
    console.log(category)
    return (
        <div className='courses'>
            <div>
                <Row>
                    <Col lg='3'>
                        <div className='courses-left mt-3'>
                            {
                                category.map(category => <LeftSideNav key={category.id} category={category}></LeftSideNav>)
                            }
                        </div>
                    </Col>
                    <Col lg='9'>
                        <Row>
                            {
                                category.map(category => <CaourseCard key={category.id} category={category}></CaourseCard>)
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Courses;