import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CaourseCard from '../Shared/CaourseCard/CaourseCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const category = useLoaderData()
    console.log(category)
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    {
                        category.map(category => <LeftSideNav key={category.id} category={category}></LeftSideNav>)
                    }
                </Col>
                <Col lg='9'>
                    <Container>
                        <Row>
                            <Col>
                                {
                                    category.map(category => <CaourseCard key={category.id} category={category}></CaourseCard>)
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
    );
};

export default Courses;