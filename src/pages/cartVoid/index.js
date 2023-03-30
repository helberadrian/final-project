import React, { useEffect, useState } from "react";

import './styles.css'

// Firebase
import { doc, deleteDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../db/config"

const CartVoid = () => {
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

    products.map( async (data) =>{
        await deleteDoc(doc(db, "cart", data.id))
    });

    localStorage.setItem('items', '0');

    return (
        <div className="container">
            <h1>Proceso de compra finalizado!!!</h1>
        </div>
    );
};

export default CartVoid;