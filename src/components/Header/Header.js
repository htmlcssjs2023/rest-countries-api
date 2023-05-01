import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Blog</a>
            </div>
        </div>
    );
};

export default Header;