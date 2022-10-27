import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c2 from '../../../assets/brands/c2.png'
import typescript1 from '../../../assets/brands/typescript1.png'
import java1 from '../../../assets/brands/java1.png'
import './BrandCarousel.css'

const BrandCarousel = () => {
    return (
        <Carousel className='carousel'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={c2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={typescript1}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={java1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;