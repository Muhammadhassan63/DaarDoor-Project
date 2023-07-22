import React from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import FAQRightColumn from "../FAQRightColumn/FAQRightColumn";
import styles from "./FrequentlyAskQuestions.module.css"; // Import the modular CSS styles as 'styles'

export default function FrequentlyAskQuestions() {
  return (
    <div>
      <div className={styles["column-container"]}>
        <div className={styles["left-column"]}>
          <div className={styles["left-content"]}>
            <p className={styles["left-heading"]}>Frequently Asked Questions</p>
            <p className={styles["left-text"]}>
              Here are some important questions that are frequently asked and
              the answers to the questions.
            </p>
            <p className={styles["left-content-text"]}>Have a different question?</p>
            <div className={styles["button-container"]}>
              <button className={styles["contact-button"]}>
                <span className={styles["btn-txt"]}>Contact Us</span>
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  className={styles["arrow-image"]}
                />
              </button>
            </div>
          </div>
        </div>
        <FAQRightColumn />
      </div>
    </div>
  );
}
