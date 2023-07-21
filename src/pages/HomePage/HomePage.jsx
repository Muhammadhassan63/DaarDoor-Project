import React from 'react'
import styles from "./home.module.css";
import image1 from "../../assets/feature_property_image-1.png"
export default function HomePage() {
  return (
    <div>
        <div className={styles.heading}>Featured Properties</div>
        <div className={styles.subHeading}>Browse some of the most viewed properties</div>

        <div className={styles.container}>
        <div className={styles.blogsPostContainer}>
          <img src={image1} alt="post image" />
          <div className={styles.title}>
            Banglow In Islamabad
          </div>
          <div className={styles.subTitle}>
          Charming Waterfront Condo
          </div>
          <div className={styles.propertyDetails}>
          4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
          Wifi · Kitchen · Parking Lot
          </div>
        </div>

        <div className={styles.blogsPostContainer}>
          <img src={image1} alt="post image" />
          <div className={styles.postHeading}>
            Hacks for findinf an ideal and best home
          </div>
          <div className={styles.postSubHeading}>
            Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
            purus viverra. Sit justo velit, eu sed
          </div>
          <div>
            Properties By <span>Adam Smith</span>
          </div>
        </div>

        <div className={styles.blogsPostContainer}>
          <img src={image1} alt="post image" />
          <div className={styles.postHeading}>
            Hacks for findinf an ideal and best home
          </div>
          <div className={styles.postSubHeading}>
            Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
            purus viverra. Sit justo velit, eu sed
          </div>
          <div>
            Properties By <span>Adam Smith</span>
          </div>
        </div>
      </div>
    </div>
  )
}
