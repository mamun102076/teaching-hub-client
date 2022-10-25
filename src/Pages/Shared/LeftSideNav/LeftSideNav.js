import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({category}) => {
    return (
        <div>
            <Link>{category.name}</Link>
        </div>
    );
};

export default LeftSideNav;