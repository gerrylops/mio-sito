import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu-list">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/competenze">
            Competenze
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/esperienze">
            Esperienza
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contatti">
            Contatti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
