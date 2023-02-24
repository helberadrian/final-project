import React from 'react';
import './styles.css';
import cart from './media/shopping-cart.png'

const CartWidget = ({number}) => {
    return (
        <div className='shopping-cart'>
            <img src={cart} alt="Shopping Cart"/>
            <p>{number}</p>
        </div>
    );
}

export default CartWidget;