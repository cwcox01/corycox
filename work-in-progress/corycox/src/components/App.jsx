import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Experiences from "./Experiences";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Heading />
      <Experiences />
      <Hobbies />
      <Contact />
    </div>
  );
}
export default App;
