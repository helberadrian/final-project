import React from 'react';
import './styles.css';
import logo from './media/logo.png';

import NavBar from '../navbar/index'; 

const Header = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"/>
            <NavBar />
        </nav>
    );
}

export default Header;