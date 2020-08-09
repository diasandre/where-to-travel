import React from "react";
import "./Header.css";
import logo from "../../logo.png";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Typography variant="h3" color="textPrimary" align="center">
        WHERE TO TRAVEL
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aa 
      </Typography>
    </header>
  );
};

export default Header;
