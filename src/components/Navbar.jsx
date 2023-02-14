import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="h1-home">
        <a href="index.html">Cory Cox</a>
      </h1>
      <nav>
        <ul className="nav nav-header">
          <li className="about-cory">
            <a href="#about-cory">About Cory</a>
          </li>
          <li className="experiences-cory">
            <a href="#experience-cory">Experiences</a>
          </li>
          <li className="hobbies-cory">
            <a href="#cory-hobby">Hobbies</a>
          </li>
          <li className="me-3">
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
