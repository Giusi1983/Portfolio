import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section logo-section">
        <h1 className="footer-logo">
          <img className="App-logo" src="/logo.png" alt="logo" />
        </h1>
        <p className="footer-tagline">Innovating the future</p>
      </div>
      <div className="footer-section links-section">
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social-section">
        <h2>Follow Me</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TW
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LI
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG
          </a>
        </div>
        <p className="footer-copyright">
          &copy; 2024 Giuseppa Prestigiacomo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
