import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="picture">
          <Link to="/">
            <img alt="logo" src={Logo} className="logo" />
          </Link>
        </div>
        <div className="navigation">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="about">
            <Link to="/about">About</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
