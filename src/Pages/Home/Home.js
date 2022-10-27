import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CaourseCard from '../Courses/CaourseCard/CaourseCard';
import BrandCarousel from '../Shared/BrandCarousel/BrandCarousel';
import './Home.css'

const Home = () => {
    const category = useLoaderData()
    return (
        <div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            <div className='home-course'>
                <Container>
                <h2>All Our Courses</h2>
                    <Row>
                        {
                            category.map(category => <CaourseCard key={category.id} category={category}></CaourseCard>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;