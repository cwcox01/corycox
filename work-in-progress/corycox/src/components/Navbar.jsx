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
            <a href="https://www.linkedin.com/in/corywcox/">About Cory</a>
          </li>
          <li className="experiences-cory">
            <a href="https://www.linkedin.com/in/corywcox/">Experiences</a>
          </li>
          <li className="hobbies-cory">
            <a href="https://www.linkedin.com/in/corywcox/">Hobbies</a>
          </li>
          <li className="contact-cory me-3">
            <a href="https://www.linkedin.com/in/corywcox/">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
