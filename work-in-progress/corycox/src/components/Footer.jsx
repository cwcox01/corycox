import React from "react";

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
          <ul className="menu simple nav">
            <li>
              <a className="social-links" href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-sm" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="social-links"
                href="https://www.instagram.com/?hl=en"
              >
                <i
                  className="fa fa-instagram fa-sm ps-1"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                className="social-links"
                href="https://www.linkedin.com/in/corywcox"
              >
                <i className="fa fa-linkedin fa-sm ps-1" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="social-links" href="https://github.com/cwcox01/">
                <i className="fa fa-github fa-sm ps-1" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
