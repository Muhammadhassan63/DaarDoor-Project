import React from "react";
import Icon from "../../../assets/Icon.png";

import star from '../../../assets/star.png'
import heart from '../../../assets/heart.png'
import image1 from "../../../assets/feature_property_image-1.png";
import image2 from "../../../assets/Image-2.png";
import image3 from "../../../assets/Image-3.png";
import image4 from "../../../assets/Image-4.png";
import image5 from "../../../assets/Image-5.png";
import image6 from "../../../assets/Image-6.png";
import styles from "./featuredproperty.module.css";
const FeaturedProperty = () => {
  return (
    <div className={styles.propertyContainer}>
      <div className={styles.propertyHeader}>
        <h2 className="">Featured Properties</h2>
        <p className={styles.headerDetails}>
          Browse some of the most viewed properties
        </p>
      </div>
      <div className={styles.heading}>Featured Properties</div>
      <div className={styles.subHeading}>
        Browse some of the most viewed properties
      </div>

      <div className={styles.container}>
        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image1} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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


        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image2} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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


        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image3} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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


        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image4} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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



        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image5} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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

        <div className={styles.blogsPostContainer}>
          <img className ={styles.propertyImage}src={image6} alt="post image" />
          <div className={styles.title}>Banglow In Islamabad</div>
          
          <div className={styles.heart}>
          <div className={styles.subTitle}>Charming Waterfront Condo</div>
              <img src={heart} alt="heart icon" />
            </div>
          <div className={styles.propertyDetails}>
            4-6 people · Entire Home · 5 beds · 3 bath
          </div>
          <div className={styles.propertyFacilities}>
            Wifi · Kitchen · Parking Lot
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
      <div className={styles.exploreMoreButton}>
        <img src={Icon} alt="" className={styles.exploreMoreIcon} />
        <span className={styles.exploreMoreText}>Explore more</span>
      </div>
    </div>
  );
};

export default FeaturedProperty;