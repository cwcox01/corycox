import React from "react";
import Navbar from "./Navbar/Navbar";
import Heading from "./Heading/Heading";
import Experiences from "./Experiences/Experiences";
import Hobbies from "./Hobbies/Hobbies";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

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
