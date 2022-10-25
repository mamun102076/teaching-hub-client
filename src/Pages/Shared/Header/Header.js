import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import brand1 from '../../../assets/brands/brand3.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <img  className='me-3' style={
                    {'width': '80px'}
                } src={brand1} alt="" />
                <Navbar.Brand>Teaching Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>FAQ</Link>
                    </Nav>
                    <Nav>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;