import React from "react";
import styles from "./propertybutton.module.css";

const PropertyButton = ({ icon, text, isActive, handleClick }) => {
  const handleClickButton = () => {
    handleClick(text); // Pass the text of the button to the parent component
  };

  return (
    <div
      className={`${styles.propertyButton} ${isActive ? styles.active : ""}`}
      onClick={handleClickButton}
    >
      <span className={`icon ${icon}`}></span>
      <span
        className={`${styles.propertyButtonText} ${
          isActive ? styles.textActive : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default PropertyButton;