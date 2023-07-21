import React from "react";
import phoneIcon from "../assets/bxs_phone-call.png";
import locationIcon from "../assets/carbon_location-filled.png";
import emailIcon from "../assets/ic_sharp-email.png";
import youtubeIcon from "../assets/youtube-icon.png";
import appleIcon from "../assets/apple-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm";
import "./ContactUs.css";
import Footer from "../components/Footer/Footer";

export default function ContactUs() {
  return (
    <>
    <Navbar/>
      <div id="contactUsContainer">
        <h1 className="contactHeading">Contact Us</h1>
        <p className="contactSubHeading">
          Any questions or remarks? Just write us a message!
        </p>
      </div>
      <div id="contactFormContainer">
        <div className="contactSection">
          <h1 className="signupHeading">Sign Up</h1>
          <p className="signupSubHeading">
            Say something to start a live chat!
          </p>
          <div className="contactDetailsContainer">
            <div className="contactDetail">
              <div className="phoneIcon">
                <img src={phoneIcon} alt="Phone Icon" />
              </div>
              <div className="phoneText">+1012 3456 789</div>
            </div>

            <div className="contactDetail">
              <div className="emailIcon">
                <img src={emailIcon} alt="Email Icon" />
              </div>
              <div className="emailText">demo@gmail.com</div>
            </div>

            <div className="contactDetailLocation">
              <div className="locationIcon">
                <img src={locationIcon} alt="Location Icon" />
              </div>
              <div className="locationText">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </div>
            </div>              
            <div className="socialIconsContainer">
              <div className="socialIcon">
                <img src={youtubeIcon} alt="YouTube Icon" />
              </div>
              <div className="socialIcon">
                <img src={appleIcon} alt="Apple Icon" />
              </div>
              <div className="socialIcon">
                <img src={twitterIcon} alt="Twitter Icon" />
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
</>
  );
}
