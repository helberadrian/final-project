import React from "react";

import './styles.css';

const CartOptions = () => {
    return (
        <div className="container">
            <a href="/checkout">Finalizar Compra</a>
            <a href="/cartvoid">Vaciar Carrito</a>
        </div>
    );
};

export default CartOptions;