import React, { useState, useEffect } from "react";

import CardProduct from "../cardProduct/index";
import { Link, useParams } from "react-router-dom";

import "./styles.css";

// FIRBASE - FIRESTORE
import { collection, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../../db/config"



const ItemDetailContainer = ( {data} ) => {
//   const { id } = useParams();

//   console.log(id);

//   const q = query(collection(db, "products"), where("manufacturer", "==", "motorola"));
//   const i = querySnapshot.forEach((doc) => {
//     console.log(doc.id, "==", doc.data());
//   });

//   return (
//     <div className="CardListContainer">
//           Producto
//     </div>
//   );
};

export default ItemDetailContainer;

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     const getProduct = async () => {
//       const q = query(collection(db, "products"));
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       //console.log(querySnapshot);
//       querySnapshot.forEach((doc) => {
//         // console.log('DATA:', doc.data(), 'ID:', doc.id);
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       //console.log(docs);
//       setProduct(docs);
//     };
//     getProduct();
//   }, []);

//   return (
//     <div className="CardListContainer">
//           {product.map((data) => {
//             return (
//               <Link
//                 to={`details/${data.id}`}
//                 style={{ textDecoration: "none" }}
//                 key={data.id}
//               >
//                 <CardProduct product={data} />
//               </Link>
//             );
//           })}
//     </div>
//   );
// };

// export default ItemDetailContainer;