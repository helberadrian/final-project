import React from "react";
import CategoryMenu from "../categoryMenu/index";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navBar">
        <a href="/">Inicio</a>
        <a href="/category">Categorias</a>
        <a href="/register">Registro</a>
        <a href="/contact">Contacto</a>

    </div>
  );
};
export default NavBar;