import React, { useState } from "react";
// import Review from "./Review";
import styles from "./customersreview.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CustomersReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const reviews = [4, 3, 5, 2, 4, 1];

  const handleNext = () => {
    const nextIndex = startIndex + 3;
    setStartIndex(Math.min(nextIndex, reviews.length - 1));
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 3;
    setStartIndex(Math.max(prevIndex, 0));
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.whatOurCustomersSayParent}>
        <b className={styles.whatOurCustomers}>What our customers say?</b>
        <div className={styles.hearFromOur}>
          Hear from our satisfied customers and clients.
        </div>
      </div>
      <div className={styles.frameContainer}></div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrev}>
          <FiChevronLeft className={styles.icon} />
        </button>
        <button className={styles.button} onClick={handleNext}>
          <FiChevronRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default CustomersReview;