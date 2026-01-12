import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">

      {/* Links */}
      <div className="footer-links">
        <div className="footer-link-wrapper">

          <div className="footer-link-items">
            <h2>About us</h2>
            <p>Get in touch</p>
          </div>

          <div className="footer-link-items">
            <h2>Contact us</h2>
            <p>contact@ajanihealthcare.com</p>
          </div>

        </div>
      </div>

      {/* Trust line — FULL WIDTH & CENTERED */}
      <p className="footer-trust">
        All staff are recruited, vetted, and managed in line with UK healthcare compliance standards.
      </p>

      {/* Social section */}
      <section className="social-media">
        <div className="social-media-wrap">

          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="./images/ahc-logo.png"
                alt="Ajani Healthcare logo"
                width="160"
                height="80"
              />
            </Link>
          </div>

          <small className="website-rights">AHC © 2023</small>

          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/ajanihealthcare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>

            <a
              className="social-icon-link instagram"
              href="https://instagram.com/ajanihealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="social-icon-link tiktok"
              href="https://www.tiktok.com/@ajanihealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok" />
            </a>

            <a
              className="social-icon-link twitter"
              href="https://twitter.com/ajanihealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>

            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/ajani-healthcare-0838b8279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Footer;
