import React from "react";
import './styles.css';

const ItemDetailContainer = ({data}) => {
    return (
        <div className="productBox">
            <p>{data.name}</p>
            <p>{data.data.color}</p>
            <p>{data.data.capacity}</p>
        </div>
    );
};

export default ItemDetailContainer;