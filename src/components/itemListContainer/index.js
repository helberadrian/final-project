import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemDetailContainer from "../itemDetailContainer/index"
import './styles.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("https://api.restful-api.dev/objects").then((res) =>
        setProducts(res.data)
        );
    }, []);

    return (
        <div className="productList">
        {products.map((product) => {
            return (
                <Link to={`/product/${product.id}`}>
                    <ItemDetailContainer key={product.id} data={product} />
                </Link>
            );
        })}
        </div>
    );
};

export default ItemListContainer;