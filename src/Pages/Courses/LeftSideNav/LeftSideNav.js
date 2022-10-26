import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = ({category}) => {
    return (
        <div className='leftsidenav'>
            <Link to={`/coursedetails/${category.id}`}>{category.name}</Link>
        </div>
    );
};

export default LeftSideNav;