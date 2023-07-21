import React from 'react'
import ArrowRight from '../assets/ArrowRight.png'
import './CallToActionSection.css'

export default function CallToActionSection() {
  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <div className="white-box">
            <p className="inner-box-text">
              Ready to find your dream ideal home?
            </p>

            <p className="inner-box-sub-text">
              We have homes in 20+ cities across the country to choose from!
            </p>

            <div className="button-container" id="bowerse-button-container">
              <button className="bowerse-button">
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
      </div>
    </div>
  )
}
