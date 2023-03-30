import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
    linkButton: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    }
  };

const CartWidget = () => {
    const items = localStorage.getItem('items');

    return (
        <div className='shopping-cart'>
            <Link to="/shop" style={styles.linkButton}>
                <ShoppingCartIcon />
                <i className="fa-solid fa-cart-shopping"></i>
                {items}
            </Link>
        </div>
    );
}

export default CartWidget;