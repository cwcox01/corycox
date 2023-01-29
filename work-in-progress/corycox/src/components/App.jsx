import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Experiences from "./Experiences";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Heading />
      <Experiences />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
