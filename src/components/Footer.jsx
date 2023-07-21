import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/bxs_phone-call.png";
import  locationIcon from "../assets/carbon_location-filled.png";
import emailIcon from "../assets/ic_sharp-email.png";
import rectangle from "../assets/Rectangle 128.png"

export default function Footer() {
  return (
    <footer>
      <div className="main-container">
        <img className="logo" src={logo} alt="Logo" />
        <hr className="horizontal-line"/>
        <footer className="footer-container">
            <div className="contact-info">
          <p>Reach Us</p>
          <div className="footer-column">
            <div className="footer-icon">
              <img src={phoneIcon} alt="Phone Icon" />
            </div>
            <div className="footer-text">+1012 3456 789</div>
          </div>

          <div className="footer-column">
            <div className="footer-icon">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="footer-text">demo@gmail.com</div>
          </div>

          <div className="footer-column">
            <div className="footer-icon">
              <img src={locationIcon} alt="Location Icon" />
            </div>
            <div className="footer-text">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </div>
          </div>
          </div>
          <div className="footer-section">
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className="footer-section">
            <p>Legal</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Services</li>
              <li>Terms of Use</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <p>Quick Links</p>
            <ul>
              <li>Properties</li>
              <li>For Rent</li>
              <li>Forum</li>
            </ul>
          </div>

          <div className="newsletter-section">
            <p className="heading">Join Our Newsletter </p>
            <div className="newsletter-signup">
            <input type="text" placeholder="Your email address"/>
            <div className="image" style={{ backgroundImage: `url(${rectangle})` }}>
            <div className="btn-text">Subscribe</div>
            </div>
            </div>
            <p className="subscription-text">* Will send you weekly updates for your better tool management. </p> 
          </div>
        </footer>

      </div>
    </footer>
  );
}