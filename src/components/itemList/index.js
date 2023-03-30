import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../db/config"

import CardProduct from "../cardProduct/index";
import ButtonDetail from "../buttonDetail";
import ButtonShop from "../buttonShop";

import './styles.css';

const styles = {
    linkButton: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  };

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
                <div className="productContainer">
                    <CardProduct key={product.id} data={product} />
                    <div className="buttonContainer">
                        <Link to={`/details/${product.id}`} style={styles.linkButton}>
                            <ButtonDetail key={product.id} data={product} />
                        </Link>
                        <Link to={`/add/${product.id}`} style={styles.linkButton}>
                            <ButtonShop key={product.id} data={product} id={product.id} />
                        </Link>
                    </div>
                    
                </div> 
            );
        })}
        </div>
    );
};

export default ItemListContainer;

// <ButtonShop key={product.id} data={product} id={product.id} />

// to={`/add/${product.id}`}