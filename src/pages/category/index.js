import React from "react";
import './styles.css';

import sansumg from './media/samsung.png';
import motorola from './media/motorola.png';
import apple from './media/apple.png';
import xiaomi from './media/xiaomi.png';

const Category = () => {
    return (
        <div className="container">
            <a href="/category/samsung">
                <div className="category">
                    <img src={sansumg} alt="Samsung"/>
                    <p>Samsung</p>
                </div>
            </a>
            <a href="/category/motorola">
                <div className="category">
                    <img src={motorola} alt="Motorola"/>
                    <p>Motorola</p>
                </div>
            </a>
            <a href="/category/apple">
                <div className="category">
                    <img src={apple} alt="Apple"/>
                    <p>Apple</p>
                </div>
            </a>
            <a href="/category/xiaomi">
                <div className="category">
                    <img src={xiaomi} alt="Xiaomi"/>
                    <p>Xiaomi</p>
                </div>
            </a>
        </div>
    );
};

export default Category;