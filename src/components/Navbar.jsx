import React from "react";
import { useState } from "react";

// importing component items

import NavbarUl from "./NavbarUl";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="navbar">
      <h1 className="h1-home">
        <a href="index.html">Cory Cox</a>
      </h1>
      <nav className="site-nav">
        <div
          className={`navbar-toggle ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${isActive ? "active" : ""}`}>
          <NavbarUl />
        </div>
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
