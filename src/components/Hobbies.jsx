import React from "react";

function Hobbies() {
  return (
    <div className="cory-hobby">
      <h2 className="corys-hobbies section-head ps-1">My Hobbies</h2>
      <table className="ps-3">
        <tr className="hobby-first-list">
          <td>
            Cycling <i className="fa-solid fa-bicycle"></i>
          </td>
          <td>
            DIY Projects <i className="fa-solid fa-screwdriver-wrench"></i>
          </td>
          <td>
            Exercising<i className=" ps-1 fa-solid fa-person-walking"></i>
          </td>
        </tr>
        <tr className=" ps-5 hobby-second-list">
          <td>
            Michigan Wolverines<i className="ps-1 fa-solid fa-football"></i>
          </td>
          <td>
            Chicago Cubs<i className="ps-1 fa-solid fa-baseball"></i>
          </td>
          <td>
            Indianapolis Colts<i className="ps-1 fa-solid fa-horse"></i>
          </td>
        </tr>
        <tr className=" ps-5 hobby-third-list">
          <td>
            Sports<i className="ps-1 fa-solid fa-stopwatch-20"></i>
          </td>
          <td>
            Football<i className="ps-1 fa-sharp fa-solid fa-football"></i>
          </td>
          <td>
            Baseball<i className="ps-1 fa-solid fa-baseball-bat-ball"></i>
          </td>
        </tr>
        <tr className=" ps-5 hobby-fourth-list">
          <td>
            Computers<i className="ps-1 fa-solid fa-computer-mouse"></i>
          </td>
          <td>
            Web Development
            <i className="ps-1 fa-brands fa-internet-explorer"></i>
          </td>
          <td>
            App Development<i className="ps-1 fa-solid fa-mobile"></i>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Hobbies;
