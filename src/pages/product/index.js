import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardProduct from "../../components/cardProduct";

import './styles.css';

// Firebase
import { collection, documentId, where, getDocs, query } from "firebase/firestore";
import { db } from "../../db/config"

const Product = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
          const q = query(collection(db, "products"), where(documentId(), "==", id));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setProduct(docs);
        };
        getProducts();
      }, [id]);

    return (
        <div className="productDetail">
            {product.map((data) => {
                return (<CardProduct data={data} key={data.id}/>)
                })
            } 
        </div>
    );
};

export default Product;