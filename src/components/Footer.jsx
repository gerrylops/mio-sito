import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gerry-lops/" target="_blank">
            <img
              src="https://img.icons8.com/fluency/96/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/gerrylops" target="_blank">
            <img
              src="https://img.icons8.com/fluency/96/github.png"
              alt="GitHub"
            />
          </a>
          {/* <a href="mailto:miamail@gmail.com">
            <img src="https://img.icons8.com/fluency/96/mail.png" alt="Mail" />
          </a> */}
        </div>
        <p className="copyright">© 2025 Gerry Lops</p>
      </div>
    </footer>
  );
};

export default Footer;
