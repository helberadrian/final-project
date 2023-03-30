import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Firebase
import { collection, documentId, where, getDocs, query } from "firebase/firestore";
import { db } from "../../db/config"

import CardProduct from "../../components/cardProduct";
import CartOptions from "../../components/cartOptions";

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, 'cart'));
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
        <div>
            <CartOptions />
            <div className="productDetail">
                {products.map((data) => {
                    return (<CardProduct data={data} key={data.id}/>)
                    })
                } 
            </div>
        </div>
    );
};

export default ShoppingCart;