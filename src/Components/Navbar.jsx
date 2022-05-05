import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Badge } from "@material-ui/core";
import {  ShoppingCartOutlined } from "@material-ui/icons";

const NavBar=()=> {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Afuuf Furniture
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/CreateAccount"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;