import React from "react";
import './styles.css';

const ItemDetailContainer = ({data}) => {
    return (
        <div className="productBox">
            <p>{data.name}</p>
            <p>{data.color}</p>
            <p>{data.capacity}</p>
            <p>{data.memory}</p>
        </div>
    );
};

export default ItemDetailContainer;