// Firebase
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../db/config";

async function getCart(){
    const q = query(collection(db, 'cart'));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
    });
    return docs;
    };

export default getCart;