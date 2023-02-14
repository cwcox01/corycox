import React from "react";
import headshot from "../img/cory-headshot.png";

function Header() {
  return (
    <div className="header" id="about-cory">
      <div className="header-img ps-1">
        <div className="headshot-img">
          <div className=" pt-2 ps-3">
            <img src={headshot} alt="Cory Cox Headshot" />
          </div>
        </div>
        <div>
          <div className="ps-5 header-info">
            <h1>Cory Cox</h1>
            <p>
              <em>Help Desk Specialist</em>
            </p>
            <p className="heading-intro">
              I am a Help Desk Specialist aspiring to be a Software Developer. I
              have a degree in Computer and Information Technology. I also have
              6 years of experience in the Information Technology Field.
            </p>
          </div>
        </div>
      </div>

      <div className="socialmedia-nav">
        <ul className="socialmedia-navbar">
          <li className="ps-1 pt-1">
            <button className="btn btn-secondary">
              <a href="mailto:cory@corycox.com">Email Me</a>
            </button>
          </li>
          <li className="ps-1 pt-1">
            <button className="btn btn-secondary">
              <a href="https://www.linkedin.com/in/corywcox/">LinkedIn</a>
            </button>
          </li>
          <li className="ps-1 pt-1">
            <button className="btn btn-secondary">
              <a href="https://github.com/cwcox01">GitHub</a>
            </button>
          </li>
          <li className="ps-1 pt-1">
            <button className="btn btn-secondary">
              <a href="https://www.instagram.com/ugotcced/">Instagram</a>
            </button>
          </li>
          <li className="ps-1 pt-1">
            <button className="btn btn-secondary">
              <a href="https://www.facebook.com/cwcox01">Facebook</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
