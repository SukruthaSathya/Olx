import React, { useState } from 'react';

import './Footer.css';

function Footer() {
  const [popLocation, setPopLocation] = useState(false)
  const [trendLocation, setTrendLocation] = useState(false)
  const [aboutUs, setAboutUs] = useState(false)
  const [olx, setOlx] = useState(false)
  const [countries,setCountries]=useState(false)

  const showPopLocation = () => {
    setPopLocation(popLocation => !popLocation)
  }
  const showTrendLocation = () => {
    setTrendLocation(trendLocation => !trendLocation)
  }
  const showAboutUs = () => {
    setAboutUs(aboutUs => !aboutUs)
  }
  const showOlx = () => {
    setOlx(olx => !olx)
  }
  const showCountries=()=>{
    setCountries(countries => !countries)
  }
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div className="section">
          <section >
            <div className='sectionHead'> POPULAR LOCATIONS
              <i onClick={showPopLocation} className={popLocation ? "fas fa-angle-up" : "fas fa-angle-down"}></i></div>
            <div className={popLocation ? "list" : "noList"}>
              <ul>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="section">
          <section>
            <div className='sectionHead'>TRENDING LOCATIONS
              <i onClick={showTrendLocation} className={trendLocation ? "fas fa-angle-up" : "fas fa-angle-down"}></i></div>
            <div className={trendLocation ? "list" : "noList"}>
              <ul>
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
            </div>
          </section>

        </div>
        <div className="section">
          <section>
            <div className='sectionHead'>ABOUT US
              <i onClick={showAboutUs} className={aboutUs ? "fas fa-angle-up" : "fas fa-angle-down"}></i></div>
            <div className={aboutUs ? "list" : "noList"}>
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="section">
          <section>
            <div className='sectionHead'>OLX
              <i onClick={showOlx} className={olx ? "fas fa-angle-up" : "fas fa-angle-down"}></i></div>
            <div className={olx ? "list" : "noList"}>
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="countrySection">
          <section>
          <div className='sectionHead'>OTHER COUNTRIES
          <i onClick={showCountries} className={countries ? "fas fa-angle-up":"fas fa-angle-down"}></i></div>
          <div className={countries ? "list" : "noList"}>
            <ul>
              <li>Pakistan</li>
              <li>South Africa</li>
              <li>Indonesia</li>
            </ul>
          </div>
          </section>
        </div>
        <div className="section">
          <section className="followUs">FOLLOW US
            <div className="socialIcons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div></section>

        </div>
        
      </div>
      <div className="footer">
        <p className="countryFoot">Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>

    </div>
  );
}

export default Footer;
