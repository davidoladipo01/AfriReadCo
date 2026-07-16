import React from 'react'
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Logo from './Logo';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo width={170} height={80} />
            {/* <div className="footer-logo" /> */}
            <p className="footer-tagline">
              Connecting readers with the stories that shape Africa.
            </p>
          </div>

          <div className="footer-columns">
            <nav className="footer-column" aria-label="Clubs">
              <h4 className="footer-column-title">Clubs</h4>
              <ul className="footer-links">
                <li><a href="/join-a-club">Join a Club</a></li>
                <li><a href="/start-a-club">Start a Club</a></li>
              </ul>
            </nav>

            <nav className="footer-column" aria-label="Explore">
              <h4 className="footer-column-title">Explore</h4>
              <ul className="footer-links">
                <li><a href="/find-a-book">Find a Book</a></li>
              </ul>
            </nav>

            <nav className="footer-column" aria-label="About">
              <h4 className="footer-column-title">About</h4>
              <ul className="footer-links">
                <li><a href="/company">Company</a></li>
                <li><a href="/community-policy">Community Policy</a></li>
              </ul>
            </nav>

            <div className="footer-column footer-column-learn">
              <nav aria-label="Learn More">
                <h4 className="footer-column-title">Learn More</h4>
                <ul className="footer-links">
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </nav>

              <div className="footer-social">
                <h4 className="footer-column-title">Follow Us</h4>
                <div className="footer-social-icons">
                  <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 AfriReadCo. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
