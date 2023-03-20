import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardProduct from "../../components/cardProduct";

import './styles.css';

// Firebase
import { collection, documentId, where, getDocs, query } from "firebase/firestore";
import { db } from "../../db/config"

const CategoryDetail = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getProducts = async () => {
          const q = query(collection(db, "products"), where("manufacturer", "==", id));
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
        <div className="categoryDetail">
            {product.map((data) => {
                return (<CardProduct data={data} key={data.id}/>)
                })
            } 
        </div>
    );
};

export default CategoryDetail;