import React from "react";

// importing component items

import NavbarUl from "./NavbarUl";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="h1-home">
        <a href="index.html">Cory Cox</a>
      </h1>
      <nav>
        <NavbarUl />
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
