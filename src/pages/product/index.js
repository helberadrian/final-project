import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../../components/itemDetailContainer/index"

// Firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db/config"

const Product = () => {
    const [product, setProduct] = useState({});

    const id = useParams();

    useEffect(() => {
        const getProduct = async () => {
            console.log("Entro");
            const docRef = doc(db, "product", "1");
            const docSnap = await getDoc(docRef);
            console.log(docSnap);

            if (docSnap.exists()) {
                console.log("Entro al if");
                setProduct({id: docSnap.id, ...docSnap.data()});
                console.log(product);
            }
        };
        getProduct();
    }, [id]);

    return (
        <div className="productDetail">
            <div key={product.id}>
                <ItemDetailContainer data={product} />
            </div>
        </div>
    );
};

export default Product;