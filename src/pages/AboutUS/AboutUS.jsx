import React from "react";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import FrequentlyAskQuestions from "../../components/FrequentlyAskQuestions/FrequentlyAskQuestions";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import styles from "./AboutUS.module.css"; // Import the modular CSS styles as 'styles'

export default function AboutUS() {
  return (
    <div>
      <div className={styles["hero-section"]}>
        <div className={styles["add-Navbar"]}>
          <Navbar2 />
        </div>
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-heading"]}>Lorem Ipsum Sit Amet Coridol</h1>
          <div>
            <p className={styles["hero-subheading"]}>
              Welcome to our online property buying and selling platform!
              Whether you're in search of your dream home or looking to sell
              your property quickly and efficiently, our website provides a
              seamless and convenient experience for all your real estate needs.
            </p>
          </div>

          <div className={styles["vector-container"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="33"
              viewBox="0 0 41 33"
              fill="none"
            >
              <path
                d="M25.4398 0H40.5825V33H6.86646e-05V20.5H25.4398V0Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles["trust-score-text"]}>
            Trust score by the property sellers
          </p>
        </div>
      </div>
      <FrequentlyAskQuestions />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
