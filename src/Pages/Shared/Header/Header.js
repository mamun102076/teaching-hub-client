import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import brand1 from '../../../assets/brands/brand3.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <>
                    <img className='me-3' style={
                        { 'width': '80px' }
                    } src={brand1} alt="img" />
                </>
                <Navbar.Brand><Link to='/'>Teaching Hub</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>FAQ</Link>
                    </Nav>
                    <Nav>
                        {
                            user?.photoURL ?
                                <img style={{width: '40px'}} src={user?.photoURL} alt="" />
                                :
                                <FaUser></FaUser>
                        }
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/'>{user?.displayName}</Link>
                                    <Button onClick={handleLogOut} variant="primary">Log out</Button>
                                </>

                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;