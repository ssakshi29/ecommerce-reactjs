import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6">
          My E-commerce Site
        </Typography>
        <IconButton edge="end" color="inherit" component={Link} to="/Cart">
          <ShoppingCart />
          Cart
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
