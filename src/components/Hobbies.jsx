import React from "react";

function Hobbies() {
  return (
    <div className="cory-hobby" id="cory-hobby">
      <h2 className="corys-hobbies section-head">My Hobbies</h2>
      <div className="hobby-list">
        <div className="hobby-first-list">
          <div>
            Cycling <i className="fa-solid fa-bicycle"></i>
          </div>
          <div>
            DIY Projects <i className="fa-solid fa-screwdriver-wrench"></i>
          </div>
          <div>
            Exercising<i className=" ps-1 fa-solid fa-person-walking"></i>
          </div>
        </div>
        <div className="hobby-second-list">
          <div>
            Michigan Wolverines<i className="ps-1 fa-solid fa-football"></i>
          </div>
          <div>
            Chicago Cubs<i className="ps-1 fa-solid fa-baseball"></i>
          </div>
          <div>
            Indianapolis Colts<i className="ps-1 fa-solid fa-horse"></i>
          </div>
        </div>
        <div className="hobby-third-list">
          <div>
            Sports<i className="ps-1 fa-solid fa-stopwatch-20"></i>
          </div>
          <div>
            Football<i className="ps-1 fa-sharp fa-solid fa-football"></i>
          </div>
          <div>
            Baseball<i className="ps-1 fa-solid fa-baseball-bat-ball"></i>
          </div>
        </div>
        <div className="hobby-fourth-list">
          <div>
            Computers<i className="ps-1 fa-solid fa-computer-mouse"></i>
          </div>
          <div>
            Web Development
            <i className="ps-1 fa-brands fa-internet-explorer"></i>
          </div>
          <div>
            App Development<i className="ps-1 fa-solid fa-mobile"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hobbies;
