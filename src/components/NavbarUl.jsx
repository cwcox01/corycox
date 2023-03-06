import React from "react";
import NavbarItem from "./NavbarItem";

export default function NavbarUl() {
  return (
    <ul className="nav nav-header">
      <NavbarItem navbarURL="#about-cory" navbarText="About Cory" />
      <NavbarItem navbarURL="#experience-cory" navbarText="Experiences" />
      <NavbarItem navbarURL="#cory-hobby" navbarText="Hobbies" />
      <NavbarItem
        navbarClassName="me-3"
        navbarURL="#contact-me"
        navbarText="Contact Me"
      />
    </ul>
  );
}
