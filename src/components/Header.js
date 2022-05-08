import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";

function Header() {
  let navigate = useNavigate();
  return (
    <div className="header__items">
      <div>
        <img
          src={Logo}
          alt="logo"
          className="logo__pic"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="header__icons">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
