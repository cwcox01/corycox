import React from "react";

// importing smaller components for the footer
import FooterList from "./FooterList";
import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <FooterContent />
        <div className="social-footer-icons">
          <FooterList />
        </div>
        <FooterNav />
      </footer>
    </div>
  );
}

export default Footer;
