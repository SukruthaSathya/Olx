import React from 'react';
import banner from '../../Images/banner copy.png'
import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        
        <div className="menuBar">
          <div className="categoryMenu">
            <span>
              
              ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Accessories</span>
            <span>For Rent: House & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            src={banner}
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
