import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "red",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <p>Categorias</p>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/category/samsung" style={styles.link}>
            Samsung
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/motorola" style={styles.link}>
            Motorola
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/apple" style={styles.link}>
            Apple
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/xiaomi" style={styles.link}>
            Xiaomi
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CategoryMenu;