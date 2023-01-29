import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <footer>
        <p>&copy; Cory Cox {year}</p>
        <p>
          <a href="mailto: cory@corycox.com">Email Me</a>
        </p>
        <div class="social-footer-icons">
          <ul class="menu simple">
            <li>
              <a href="https://www.facebook.com/">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=en">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/corywcox">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/cwcox01/">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
