import React from "react";
import headshot from "../img/cory-headshot.png";

function Header() {
  return (
    <div className="header">
      <table className="heading-table ps-1" cellSpacing="20">
        <tr>
          <td className="ps-3">
            <img src={headshot} alt="Cory Cox Headshot" />
          </td>
          <td className="ps-5">
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

      <div className="socialmedia-nav">
        <ul className="socialmedia-navbar">
          <li className="ps-1 ">
            <button className="btn btn-secondary">
              <a href="mailto:cory@corycox.com">Email Me</a>
            </button>
          </li>
          <li className="ps-1">
            <button className="btn btn-secondary">
              <a href="https://www.linkedin.com/in/corywcox/">LinkedIn</a>
            </button>
          </li>
          <li className="ps-1">
            <button className="btn btn-secondary">
              <a href="https://www.linkedin.com/in/corywcox/">GitHub</a>
            </button>
          </li>
          <li className="ps-1">
            <button className="btn btn-secondary">
              <a href="https://www.linkedin.com/in/corywcox/">Instagram</a>
            </button>
          </li>
          <li className="ps-1">
            <button className="btn btn-secondary">
              <a href="https://www.linkedin.com/in/corywcox/">Facebook</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
