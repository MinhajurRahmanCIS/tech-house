import React from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <div>
            <a href="">Shop</a>
            <a href="">Order Review</a>
            <a href="">Manage Inventory</a>
            <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;