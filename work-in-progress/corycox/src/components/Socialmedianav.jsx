import React from "react";
import SocialmedianavItem from "./SocialmedianavItem";

export default function Socialmedianav() {
  return (
    <ul className="socialmedia-navbar btn-cory pt-1">
      <SocialmedianavItem
        socialBtnUrl="mailto:cory@corycox.com"
        socialBtnText="Email Me"
      />
      <SocialmedianavItem
        socialBtnUrl="https://www.linkedin.com/in/corywcox/"
        socialBtnText="LinkedIn"
      />
      <SocialmedianavItem
        socialBtnUrl="https://github.com/cwcox01"
        socialBtnText="GitHub"
      />
      <SocialmedianavItem
        socialBtnUrl="https://www.instagram.com/ugotcced/"
        socialBtnText="Instagram"
      />
      <SocialmedianavItem
        socialBtnUrl="https://www.facebook.com/cwcox01"
        socialBtnText="Facebook"
      />
    </ul>
  );
}
