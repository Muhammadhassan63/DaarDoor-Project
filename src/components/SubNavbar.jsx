import React from 'react';
import './SubNavbar.css';

const SubNavbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Place</li>
        <li className="navbar-item">Type of place</li>
        <div className="vl"></div>
        <li className="navbar-item">Easy Transfer</li>
        <li className="navbar-item">Wifi</li>
        <li className="navbar-item">Kitchen</li>
        <li className="navbar-item">Air Conditioning</li>
        <li className="navbar-item">Washer</li>
        <li className="navbar-item">Iron</li>
        <li className="navbar-item">Dedicated Workspace</li>
        <li className="navbar-item">Free Parking</li>
        <li className="navbar-item">Dryer</li>
        <li className="navbar-item">Filter</li>
      </ul>
    </nav>
  );
};

export default SubNavbar;
