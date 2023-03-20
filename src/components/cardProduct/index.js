import * as React from "react";

import './styles.css';

const CardProduct = ({ data }) => {
  const manufacturer = data.manufacturer.toUpperCase();

  return (
    <div className="card">
      <img src={data.img} alt="Imagen de Producto"/>
      <div>
        <div className="title">
          {data.name}
        </div>
        <div className="subtitle">
          {manufacturer}
        </div>
        <div className="text">
          Capacidad: {data.capacity}
        </div>
        <div className="text">
          Memoria RAM: {data.memory}
        </div>
        <div className="text">
          Color: {data.color}
        </div>
        <div className="subtext">
          ${data.price} | stock: {data.stock}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;