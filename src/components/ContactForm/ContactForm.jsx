import React from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import styles from "./ContactForm.module.css"; // Import the CSS Modules styles as 'styles'

export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.formField}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          required
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue="general" required>
          {/* <option value="" disabled>
            General Inquiry
          </option> */}
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="details">Further Details</option>
        </select>
      </div>
      <div className={styles.formField}>
        <label htmlFor="message">Message</label>
        
        <textarea
        className={styles.messageBox}
          id="message"
          name="message"
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
          required
        >
        </textarea>
       
      </div>

      <div className={styles.buttonContainer} >
        <div className="subContainer">
        <button className={styles.submitButton}>
          <span className={styles.btnText}>Submit</span>
          <img src={ArrowRight} alt="Arrow Right" className={styles.arrowSvg} />
        </button>
        </div>
      </div>
    </div>
  );
}
