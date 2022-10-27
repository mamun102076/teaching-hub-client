import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Container className='my-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>What kind of website this is?</h5> </Accordion.Header>
                    <Accordion.Body>
                        This is a educational website.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>How can i register?</h5></Accordion.Header>
                    <Accordion.Body>
                        Go to the login option in navbar.after that you will find a option register in below.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Where is our location?</h5></Accordion.Header>
                    <Accordion.Body>
                        Our location is Dhaka,Bangladesh
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>How can i buy course?</h5></Accordion.Header>
                    <Accordion.Body>
                        To buy course you have to go course page then course details and the get premium access.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h5>Are the online courses have lifetime access?</h5></Accordion.Header>
                    <Accordion.Body>
                        Yes online courses have lifetime access.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;