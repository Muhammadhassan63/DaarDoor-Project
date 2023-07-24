import React from "react";
import styles from "./property.module.css";
import img1 from "../../../assets/img1.png";
import star from "../../../assets/star.png";
import heart from "../../../assets/heart.png";
const Property = () => {
  return (
    <div className={styles.propertyCardContainer}>
      <div
        className={styles.propertyCard}
        style={{
          borderTop: `1px solid #D1D2D4`,
        }}
      >
        <img src={img1} alt="img1" className={styles.propertyCardImg} />
        <div className={styles.text}>
          <div className={styles.containerHeading1}>
            <div className={styles.heading1}>
              <p>House in Islamabad</p>
              <h3>Bordeaux Gateway</h3>
            </div>

            <div className={styles.heart}>
              <img src={heart} alt="heart icon" />
            </div>
          </div>
          <div className={styles.details1}>
            <p>4-6 People . Entire Home . 5 Beds . 2 Baths</p>
            <p>Wifi. Kitchen. Parking</p>
          </div>
          <div className={styles.reviewAndPriceContainer}>
            <div className={styles.review1}>
              <h4>4.8</h4>
              <img src={star} alt="star" />
              <p>(318 Reviews)</p>
            </div>
            <div className={styles.pricing}>
              <p>$3205</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;