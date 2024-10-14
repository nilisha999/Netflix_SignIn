import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer-text">Questions? Call 000-800-919-1694</p>

        <div className="footer-links">
          <a href="/faq" className="footer-link">
            FAQ
          </a>

          <a href="/help" className="footer-link">
            Help Center
          </a>

          <a href="/terms" className="footer-link">
            Terms of Use
          </a>

          <a href="/privacy" className="footer-link">
            Privacy
          </a>

          <a href="/cookie" className="footer-link">
            Cookie Preferences
          </a>

          <a href="/corporate" className="footer-link">
            Corporate Information
          </a>
        </div>
        <p className="footer-credit"> © 2024 Netflix, Inc.</p>
      </footer>
    </>
  );
};

export default Footer;
