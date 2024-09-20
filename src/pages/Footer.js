import React from 'react';
import '../styles/Footer.css';
import innova8 from '../assets/images/Innovat8.svg';
import plane from '../assets/images/plane.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={innova8} alt="Innov8 Logo" />
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Marketplace</li>
            <li>Industries</li>
            <li>Our Team</li>
            <li>Resources</li>
            <li>Privacy Statement</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Experience</h3>
          <ul>
            <li>Projects</li>
            <li>Partners</li>
            <li>Blogs</li>
            <li>Technologies</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: hello@innov8.com</p>
          <p>Headquarters:</p>
          <p>Address, Office - Road, Kingston, Canada.</p>
          <p>Ph: +1 (519) 792-7356</p>
          <p>Regions:</p>
          <ul>
            <li>United States</li>
            <li>UAE</li>
            <li>United Kingdom</li>
            <li>Saudi Arabia</li>
            <li>Qatar</li>
            <li>Pakistan</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Stay Up To Date</h3>
          <p>Subscribe to our newsletter.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">
            <i className="icon-send"><img src={plane} alt="" /></i>
            </button>
          </form>
          <p>
            By subscribing, you are acknowledging our <a href="#privacy" className="Privacy">Privacy Policy</a> and
            granting permission to receive updates from our company.
          </p>
          <p>You can unsubscribe anytime.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-reserved">© 2024 Innov8. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a> 
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
