import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './media/logo.png';

import CartWidget from '../cartWidget/index';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"/>
            <ul className='menu'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/category">Categoria</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <CartWidget number={0}></CartWidget>
        </nav>
    );
}

export default NavBar;