import React from "react";
import ArrowRight from "../assets/ArrowRight.png";
import "./FrequentlyAskQuestions.css";
import FAQRightColumn from "./FAQRightColumn";

export default function FrequentlyAskQuestions() {
  return (
    <div>
      <div className="column-container">
        <div className="left-column">
          <div className="left-content">
            <p className="left-heading">Frequently Asked Questions</p>
            <p className="left-text">
              Here are some important questions that are frequently asked and
              the answers to the questions.
            </p>
            <p className="left-content-text">Have a different question?</p>
            <div className="button-container">
              <button className="contact-button">
                <span className="btn-txt">Contact Us</span>
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  className="arrow-image"
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
