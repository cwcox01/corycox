import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <a href="index.html">Cory Cox</a>
      </h1>
      <nav>
        <ul className="nav">
          <li className="about-cory">
            <a href="#">About Cory</a>
          </li>
          <li className="experiences-cory">
            <a href="#">Experiences</a>
          </li>
          <li className="hobbies-cory">
            <a href="#">Hobbies</a>
          </li>
          <li className="contact-cory">
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
