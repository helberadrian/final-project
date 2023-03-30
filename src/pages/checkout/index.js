import React, { useEffect, useState } from "react";

import './styles.css'

// Firebase
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../db/config"

import CloseShop from "../../components/closeShop";

const CheckOut = () => {
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

    let price = 0;
    let totalItems = products.length;
    products.map((data) =>{
        price = price + data.price;
    });

    return (
        <div className="container">
            <h1>Resumen de su Compra</h1>
            <div className="element">
                <div className="table">
                    {products.map((data) => {
                        return (<p>Producto: {data.name}, Id: {data.id}</p>)
                        })
                    } 
                </div>
                <p>Cantidad de Productos: {totalItems}</p>
                <p>Costo Total: {price}</p>
            </div>
            <CloseShop />
        </div>
    );
};

export default CheckOut;