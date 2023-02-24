import React from "react";
import './styles.css';

const ItemDetailContainer = ({data}) => {

    const info = {
        "name": data.name,
        "color": data.data.color,
        "capacity": data.data.capacity
    }

    console.log(info);
    return (
        <div className="productBox">
            <p>{info.name}</p>
            <p>{info.color}</p>
            <p>{info.capacity}</p>
        </div>
    );
};

export default ItemDetailContainer;