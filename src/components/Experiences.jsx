import React from "react";

function Experiences() {
  return (
    // starting div for corys experiences
    <div className="cory-experiences">
      <h2 className="section-head">-Cory's Experiences</h2>

      <div className="work-experience">
        <h3>Professional Experience</h3>
        <div className="helpdesk">
          <h4>Help Desk Specialist</h4>
          <p>2021 - Present</p>
        </div>

        <div className="field-technician">
          <h4>Field Technician</h4>
          <p>2020 - 2021</p>
        </div>

        <div className="education">
          <h3 className="education-header">Education</h3>
          <div className="education-iupui">
            <h4>Indiana University Purdue University of Indianapolis</h4>
            <p>Bachelor's Degree, Computer and Information Technology, 2018</p>
            <p>Certificate, Organizational Leadership, 2018</p>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-bar-container">
            <li>
              <div className="progressbar-title">
                <h3>
                  HTML5<i className="fa-brands fa-html5"></i>
                </h3>
                <span className="percent" id="html-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressred"
                  id="progress-html"
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>
                  CSS<i className="fa-brands fa-css3"></i>
                </h3>
                <span className="percent" id="css-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressblue"
                  id="progress-css"
                ></span>
              </div>
            </li>

            <li>
              <div className="progressbar-title">
                <h3>
                  JavaScript<i className="fa-brands fa-js"></i>
                </h3>
                <span className="percent" id="javascript-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progresspurple"
                  id="progress-javascript"
                ></span>
              </div>
            </li>

            <li>
              <div className="progressbar-title">
                <h3>
                  ReactJS<i className="fa-brands fa-react"></i>
                </h3>
                <span className="percent" id="react-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressorange"
                  id="progress-react"
                ></span>
              </div>
            </li>

            <li>
              <div className="progressbar-title">
                <h3>
                  Bootstrap<i className="fa-brands fa-bootstrap"></i>
                </h3>
                <span className="percent" id="bootstrap-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressgreen"
                  id="progress-bootstrap"
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>
                  IOs Development<i className="fa-brands fa-apple"></i>
                </h3>
                <span className="percent" id="ios-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressgreen"
                  id="progress-ios"
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>
                  Xcode<i className="fa-solid fa-code"></i>
                </h3>
                <span className="percent" id="xcode-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressgreen"
                  id="progress-xcode"
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>
                  Swift<i className="fa-brands fa-swift"></i>
                </h3>
                <span className="percent" id="xcode-pourcent"></span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressgreen"
                  id="progress-xcode"
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // ending div for corys experiences
  );
}
export default Experiences;
