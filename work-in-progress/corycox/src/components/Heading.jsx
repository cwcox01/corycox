import React from "react";
import headshot from "../img/cory-headshot.png";

function Header() {
  return (
    <div className="header">
      <table cellSpacing="20">
        <tr>
          <td>
            <img src={headshot} alt="Cory Cox Headshot" />
          </td>
          <td>
            <h1>Cory Cox</h1>
            <p>
              <em>Help Desk Specialist</em>
            </p>
            <p>
              I am a Help Desk Specialist aspiring to be a Software Developer. I
              have a Bachelor of Science in Computer and Information Technology
              and 6 years of experience in the Desktop Support area of the
              Information Technology Field. I enjoy doing DIY projects, cycling
              and spending time with my Italian Greyhound Nico.
            </p>
          </td>
        </tr>
      </table>
      <button>
        <a href="mailto:cory@corycox.com">Email Me</a>
      </button>
      <div className="socialmedia-nav">
        <ul className="nav">
          <li>
            <a href="https://www.linkedin.com/in/corywcox/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/corywcox/">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/corywcox/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/corywcox/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
