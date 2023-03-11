import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../db/config"

import ItemDetailContainer from "../itemDetailContainer/index"
import './styles.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, 'products'));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setProducts(docs);
        };
        getProducts();
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