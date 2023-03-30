import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Firebase
import { collection, documentId, where, getDocs, query, addDoc } from "firebase/firestore";
import { db } from "../../db/config"

import CardProduct from "../../components/cardProduct";
import AddOptions from "../../components/addOptions";

const AddProduct = () => {
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

    product.map((data) =>{
        addDoc(collection(db, "cart"), {
            name: data.name,
            manufacturer: data.manufacturer,
            memory: data.memory,
            capacity: data.capacity,
            price: data.price,
            stock: data.stock,
            img: data.img
        });
    });

    const itemsStorage = localStorage.getItem('items');
    if (itemsStorage === null){
        localStorage.setItem('items', '1');
    } else{
        const items = Number.parseInt(itemsStorage, 10);
        const newItems = items + 1;
        localStorage.setItem('items', newItems);
    }

    return (
        <div>
            <AddOptions />
            <div className="productDetail">
                {product.map((data) => {
                    return (<CardProduct data={data} key={data.id}/>)
                    })
                } 
            </div>
        </div>
    );
};

export default AddProduct;