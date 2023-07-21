import React from "react";
import phoneIcon from "../assets/bxs_phone-call.png";
import locationIcon from "../assets/carbon_location-filled.png";
import emailIcon from "../assets/ic_sharp-email.png";
import youtubeIcon from "../assets/youtube-icon.png";
import appleIcon from "../assets/apple-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./ContactUs.module.css"; // Import the modular CSS styles as 'styles'
import Footer from "../components/Footer/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div id={styles.contactUsContainer}>
        <h1 className={styles.contactHeading}>Contact Us</h1>
        <p className={styles.contactSubHeading}>
          Any questions or remarks? Just write us a message!
        </p>
      </div>
      <div id={styles.contactFormContainer}>
        <div className={styles.contactSection}>
          <h1 className={styles.signupHeading}>Sign Up</h1>
          <p className={styles.signupSubHeading}>
            Say something to start a live chat!
          </p>
          <div className={styles.contactDetailsContainer}>
            <div className={styles.contactDetail}>
              <div className={styles.phoneIcon}>
                <img src={phoneIcon} alt="Phone Icon" />
              </div>
              <div className={styles.phoneText}>+1012 3456 789</div>
            </div>

            <div className={styles.contactDetail}>
              <div className={styles.emailIcon}>
                <img src={emailIcon} alt="Email Icon" />
              </div>
              <div className={styles.emailText}>demo@gmail.com</div>
            </div>

            <div className={styles.contactDetailLocation}>
              <div className={styles.locationIcon}>
                <img src={locationIcon} alt="Location Icon" />
              </div>
              <div className={styles.locationText}>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </div>
            </div>
            <div className={styles.socialIconsContainer}>
              <div className={styles.socialIcon}>
                <img src={youtubeIcon} alt="YouTube Icon" />
              </div>
              <div className={styles.socialIcon}>
                <img src={appleIcon} alt="Apple Icon" />
              </div>
              <div className={styles.socialIcon}>
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
