import React from "react";
import "./style.css";

import CartWidget from "../cartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
        <a href="/">Inicio</a>
        <a href="/category">Categorias</a>
        <a href="/register">Registro</a>
        <a href="/contact">Contacto</a>
        <CartWidget />
    </div>
  );
};
export default NavBar;