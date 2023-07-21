import React from "react";
import ArrowRight from "../../assets/ArrowRight.png";
import styles from "./CallToActionSection.module.css"; // Import the CSS Modules styles as 'styles'

export default function CallToActionSection() {
  return (
    <div>
      <div className={styles["outer-box"]}>
        <div className={styles["inner-box"]}>
          <div className={styles["white-box"]}>
            <p className={styles["inner-box-text"]}>
              Ready to find your dream ideal home?
            </p>

            <p className={styles["inner-box-sub-text"]}>
              We have homes in 20+ cities across the country to choose from!
            </p>

            <div className={styles["button-container"]}>
              
                <button className={styles["bowerse-button"]}>
                  <span className={styles["btn-txt"]}>Browerse Homes</span>
                  <img
                    src={ArrowRight}
                    alt="Arrow Right"
                    className={styles["arrow-image"]}
                  />
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
