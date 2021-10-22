import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink style={{ marginRight: '7px' }} to='/home'>Home</NavLink>
            <NavLink style={{ marginRight: '7px' }} to='/products'>Products</NavLink>
            <NavLink to='/products/add'>Add Product</NavLink>
        </div>
    );
};

export default Header;