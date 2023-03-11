import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './media/logo.png';

import CartWidget from '../cartWidget/index';

const Header = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"/>
            <ul className='menu'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/categories/:category">Categorias</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
                <li>
                    <Link to="/register">Registro</Link>
                </li>
            </ul>
            <CartWidget number={0}></CartWidget>
        </nav>
    );
}

export default Header;