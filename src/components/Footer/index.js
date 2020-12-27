import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          <strong>
            <span>&copy; Copyright{new Date().getFullYear()}</span>
          </strong>
        </div>
      </div>
      <a href="#about" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
