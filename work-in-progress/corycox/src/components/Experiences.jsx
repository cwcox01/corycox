import React from "react";

function Experiences() {
  return (
    // starting div for corys experiences
    <div className="cory-experiences">
      <h2 className="section-head fs-1 ps-1">Cory's Experiences</h2>

      <div className="work-experience">
        <h3 className="fs-4">Professional Experience</h3>
        <div className="work-jobs ms-5">
          <div className="jobs">
            <h4 className="fs-5">Help Desk Specialist</h4>
            <p className="fs-6">2021 - Present</p>
            <h4 className="fs-5">Field Technician</h4>
            <p className="fs-6">2020 - 2021</p>
          </div>
        </div>
        <div className="education">
          <h3 className="education-header fs-4">Education</h3>
          <div className="education-iupui ms-5">
            <h4 className="fs-5">IUPUI</h4>
            <p className="fs-6">
              Major, Computer and Information Technology, 2018
            </p>
            <p className="fs-6">Cert, Organizational Leadership, 2018</p>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="fs-4">Skills</h3>
          <div className="all-skills ps-5">
            <div className="left-skills">
              <h3 className="fs-5">
                HTML5<i className="fa-brands fa-html5"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills html"></div>
                </div>
              </div>

              <h3 className="fs-5">
                CSS<i className="fa-brands fa-css3"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills css"></div>
                </div>
              </div>
              <h3 className="fs-5">
                JavaScript<i className="fa-brands fa-js"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills js"></div>
                </div>
              </div>
              <h3 className="fs-5">
                End User Support<i className="fa-brands fa-hire-a-helper"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills end-user"></div>
                </div>
              </div>
            </div>
            <div className="middle-skills ps-5">
              <h3 className="fs-5">
                Bootstrap<i className="fa-brands fa-bootstrap"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills bootstrap"></div>
                </div>
              </div>

              <h3 className="fs-5">
                iOS Development<i className="fa-brands fa-apple"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills ios-dev"></div>
                </div>
              </div>

              <h3 className="fs-5">
                Xcode<i className="fa-solid fa-code"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills xcode"></div>
                </div>
              </div>
              <h3 className="fs-5">
                Swift<i className="fa-brands fa-swift"></i>
              </h3>
              <div className="ps-2 pb-4">
                <div className="skills-container">
                  <div className="skills swift"></div>
                </div>
              </div>
            </div>
            <div className="right-skills ps-5">
              <h3 className="fs-5">
                Windows 10/11<i className="fa-brands fa-windows"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills windows"></div>
                </div>
              </div>
              <h3 className="fs-5">
                Mac OS<i className="fa-brands fa-apple"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills mac-os"></div>
                </div>
              </div>
              <h3 className="fs-5">
                Active Directory<i className="fa-solid fa-computer"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills active-directory"></div>
                </div>
              </div>
              <h3 className="fs-5">
                React JS<i className="fa-brands fa-react"></i>
              </h3>

              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills react-js"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // ending div for corys experiences
  );
}
export default Experiences;
