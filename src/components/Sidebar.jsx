import React from "react";
import PropertySection from "./PropertySection.jsx";
import Map from "./Map.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <div className="mt-4">
          <h3 className="amenities-title">Select Amenities</h3>
          <ul className="amenities-list">
            <li>
              <label>
                <input type="checkbox" className="mr-2" />
                Parking <span>10</span>
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                OpenKitchen <span>12</span>
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                WorkSpace <span>14</span>
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Lawn <span>16</span>
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Air Conditioning <span>16</span>
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Balcony <span>16</span>
              </label>
            </li>
           
          </ul>
        </div>
        <div >
          <label className="font-bold">Space</label>
          <select className="space-select">
            
          </select>
        </div>
        <div >
          <label className="font-bold">Rooms</label>
          <select className="year-built-select">
          </select>
        </div>
        <div >
          <label className="font-bold">Kitchen</label>
          <select className="year-built-select">
          </select>
        </div>
        <div>
          <label className="font-bold">Bathroom</label>
          <select className="year-built-select">
          </select>
        </div>
      </div>

    
    </div>
  );
};

export default Sidebar;
