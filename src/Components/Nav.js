import React from "react";
import logo from "../images/logo.svg";
// import { pageLinks, socailLinks } from "../utils/data";
import NavLinks from "./NavLinks";
import { MediaLinks } from "./MediaLinks";

const Nav = () => {
  // console.log("rernder n  component");

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <NavLinks parentClass="nav-links" itemClass="nav-link"></NavLinks>

        <MediaLinks parentIcons="nav-icons" itemIcons="nav-icon"></MediaLinks>
      </div>
    </nav>
  );
};

export default Nav;
