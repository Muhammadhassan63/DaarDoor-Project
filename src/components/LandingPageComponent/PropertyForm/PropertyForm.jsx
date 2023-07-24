import styles from "./propertyform.module.css";
import Flat from "../../../assets/community.png";
import RvHome from "../../../assets/Campervan.png";
import Villa from "../../../assets/villa.png";
import Bungalow from "../../../assets/house.png";
import Cottage from "../../../assets/cottage.png";
import Apartment from "../../../assets/apartment.png";
import { useState } from "react";
import PropertyButton from "./PropertyButton.jsx";
const PropertyForm = () => {
  const [activeButtonProperty, setActiveButtonProperty] = useState(null);
  const [buyRentButtonActive, setBuyRentButtonActive] = useState("Rent");

  const handleButtonClick = (buttonText) => {
    console.log(buttonText);
    setBuyRentButtonActive(buttonText);
  };

  const handleButtonClickProperty = (buttonText) => {
    setActiveButtonProperty(buttonText);
  };
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h1 className={styles.title}>Online Real Estate, Made Easy</h1>
        <p className={styles.description}>
          Welcome to our online property buying and selling platform! Whether
          you're in search of your dream home or looking to sell your property
          quickly
        </p>
        <div className={styles.centeredFormContainer}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.rentButton} ${
                buyRentButtonActive === "Rent" ? styles.active : ""
              }`}
              onClick={() => handleButtonClick("Rent")}
            >
              Rent
            </button>
            <button
              className={`${styles.button} ${styles.buyButton} ${
                buyRentButtonActive === "Buy" ? styles.active : ""
              }`}
              onClick={() => handleButtonClick("Buy")}
            >
              Buy
            </button>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formRow}>
              <div className={styles.inputFieldBase}>
                <div className={styles.text}>Title</div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Gourdon’s Flat no 14 Loius Apartment Portion"
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.inputFieldBase}>
                <div className={styles.text}>Location</div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Sector 3F, Red Ornaments Area, Opposite 14 Street,"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputFieldBase}>
                <div className={styles.text}>Property Type</div>
                <div className={styles.propertyButtonContainer}>
                  <PropertyButton
                    icon={Flat}
                    text={"Flat"}
                    isActive={activeButtonProperty === "Flat"}
                    handleClick={handleButtonClickProperty}
                  />
                  <PropertyButton
                    icon={RvHome}
                    text={"RvHome"}
                    isActive={activeButtonProperty === "RvHome"}
                    handleClick={handleButtonClickProperty}
                  />
                  <PropertyButton
                    icon={Villa}
                    text={"Villa"}
                    isActive={activeButtonProperty === "Villa"}
                    handleClick={handleButtonClickProperty}
                  />
                  <PropertyButton
                    icon={Bungalow}
                    text={"Bungalow"}
                    isActive={activeButtonProperty === "Bungalow"}
                    handleClick={handleButtonClickProperty}
                  />
                  <PropertyButton
                    icon={Cottage}
                    text={"Cottage"}
                    isActive={activeButtonProperty === "Cottage"}
                    handleClick={handleButtonClickProperty}
                  />
                  <PropertyButton
                    icon={Apartment}
                    text={"Apartment"}
                    isActive={activeButtonProperty === "Apartment"}
                    handleClick={handleButtonClickProperty}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.button} ${styles.searchPropertyButton}`}
            >
              Search Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;