// HeroSection.jsx

import React, { useState } from "react";
import "./HeroSection.css";
import pic from '../images/Image.png'

const HeroSection = () => {
  const [mainImage, setMainImage] = useState(null);
  const [subImage1, setSubImage1] = useState(null);
  const [subImage2, setSubImage2] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="hero-section">
      <div className="image-upload">
        <div className="static-image">
          <img src={pic} alt="" srcset="" />
        </div>
        <div className="main-image">
          {mainImage ? (
            <img src={mainImage} alt="Main Image" className="uploaded-image" />
          ) : (
            <label htmlFor="main-image-upload" className="upload-label">
              <div className="svg-container">
                <div className="svglogo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.4966 14.3047L15.0312 8.54691C14.1963 6.59353 12.6604 6.51476 11.6286 8.37363L10.1399 11.0595C9.38377 12.4222 7.97388 12.5403 6.99719 11.3194L6.8239 11.0989C5.80783 9.82291 4.3743 9.98044 3.64178 11.4376L2.28702 14.155C1.33396 16.0454 2.71235 18.2744 4.82326 18.2744H14.8737C16.9216 18.2744 18.3 16.1871 17.4966 14.3047ZM5.91022 7.24728C6.53692 7.24728 7.13795 6.99833 7.58109 6.55519C8.02423 6.11205 8.27318 5.51102 8.27318 4.88432C8.27318 4.25763 8.02423 3.6566 7.58109 3.21346C7.13795 2.77032 6.53692 2.52136 5.91022 2.52136C5.28353 2.52136 4.6825 2.77032 4.23936 3.21346C3.79622 3.6566 3.54726 4.25763 3.54726 4.88432C3.54726 5.51102 3.79622 6.11205 4.23936 6.55519C4.6825 6.99833 5.28353 7.24728 5.91022 7.24728Z"
                      stroke="#373737"
                      stroke-width="1.18148"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="main-imagebox-text">
                Drop image or
                <div>
                  {" "}
                  or <span className="upload">Upload</span>
                </div>
              </div>
              <input
                id="main-image-upload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setMainImage)}
              />
            </label>
          )}
        </div>
        <div className="sub-images">
          <div className="sub-image">
            {subImage1 ? (
              <img
                src={subImage1}
                alt="Sub Image 1"
                className="uploaded-image"
              />
            ) : (
              <label htmlFor="sub-image-1-upload" className="upload-label">
                <div className="svg-container">
                  <div className="svglogo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.4966 14.3047L15.0312 8.54691C14.1963 6.59353 12.6604 6.51476 11.6286 8.37363L10.1399 11.0595C9.38377 12.4222 7.97388 12.5403 6.99719 11.3194L6.8239 11.0989C5.80783 9.82291 4.3743 9.98044 3.64178 11.4376L2.28702 14.155C1.33396 16.0454 2.71235 18.2744 4.82326 18.2744H14.8737C16.9216 18.2744 18.3 16.1871 17.4966 14.3047ZM5.91022 7.24728C6.53692 7.24728 7.13795 6.99833 7.58109 6.55519C8.02423 6.11205 8.27318 5.51102 8.27318 4.88432C8.27318 4.25763 8.02423 3.6566 7.58109 3.21346C7.13795 2.77032 6.53692 2.52136 5.91022 2.52136C5.28353 2.52136 4.6825 2.77032 4.23936 3.21346C3.79622 3.6566 3.54726 4.25763 3.54726 4.88432C3.54726 5.51102 3.79622 6.11205 4.23936 6.55519C4.6825 6.99833 5.28353 7.24728 5.91022 7.24728Z"
                        stroke="#373737"
                        stroke-width="1.18148"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="imagebox-text">
                  Drop image or
                  <div>
                    {" "}
                    or <span className="text-subimages">Upload</span>
                  </div>
                </div>
                <input
                  id="sub-image-1-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setSubImage1)}
                />
              </label>
            )}
          </div>
          <div className="sub-image">
            {subImage2 ? (
              <img
                src={subImage2}
                alt="Sub Image 2"
                className="uploaded-image"
              />
            ) : (
              <label htmlFor="sub-image-2-upload" className="upload-label">
                <div className="svg-container">
                  <div className="svglogo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.4966 14.3047L15.0312 8.54691C14.1963 6.59353 12.6604 6.51476 11.6286 8.37363L10.1399 11.0595C9.38377 12.4222 7.97388 12.5403 6.99719 11.3194L6.8239 11.0989C5.80783 9.82291 4.3743 9.98044 3.64178 11.4376L2.28702 14.155C1.33396 16.0454 2.71235 18.2744 4.82326 18.2744H14.8737C16.9216 18.2744 18.3 16.1871 17.4966 14.3047ZM5.91022 7.24728C6.53692 7.24728 7.13795 6.99833 7.58109 6.55519C8.02423 6.11205 8.27318 5.51102 8.27318 4.88432C8.27318 4.25763 8.02423 3.6566 7.58109 3.21346C7.13795 2.77032 6.53692 2.52136 5.91022 2.52136C5.28353 2.52136 4.6825 2.77032 4.23936 3.21346C3.79622 3.6566 3.54726 4.25763 3.54726 4.88432C3.54726 5.51102 3.79622 6.11205 4.23936 6.55519C4.6825 6.99833 5.28353 7.24728 5.91022 7.24728Z"
                        stroke="#373737"
                        stroke-width="1.18148"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="imagebox-text">
                  Drop image
                  <div>
                    {" "}
                    or <span className="text-subimages">Upload</span>
                  </div>
                </div>
                <input
                  id="sub-image-2-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setSubImage2)}
                />
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="title-input">Title</label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Gourdon’s Flat no 14 Loius Apartment Portion"
          />
          <div className="hint-text">Max 25 characters</div>
        </div>
        <div className="input-group">
          <label htmlFor="location-input">Location</label>
          <input
            id="location-input"
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Sector 3F, Red Ornaments Area, Opposite 14 Street, "
          />
          <div className="hint-text">Max 25 characters</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
