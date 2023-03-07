import React from "react";

// importing smaller component for the footer social media links
import FooterList from "./FooterList";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <footer>
        <p className="cory-footer-name mb-0">&copy; Cory Cox {year}</p>
        <p className=" mb-0 footer-email">
          <a className="footer-email" href="mailto: cory@corycox.com">
            Email Me
          </a>
        </p>
        <div className="social-footer-icons">
          <FooterList />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
