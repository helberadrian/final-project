import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import CategoryMenu from "../categoryMenu/index";
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const NavBar = () => {
  const items = [];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={styles.linkButton}>
            Inicio
          </Link>
          <CategoryMenu />
          <Link to="/register" style={styles.linkButton}>
            Registro
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contacto
          </Link>
          <Link to="/cart" style={styles.linkButton}>
            <i className="fa-solid fa-cart-shopping"></i>
            {items.length}
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;