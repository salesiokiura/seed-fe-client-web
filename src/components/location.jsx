import React from 'react';
import './global.css';
import './index.css';

const LocationPage = () => {
  return (
    <div className="location">
      <div className="location-child"></div>
      <b className="location1">LOCATION</b>
      <div className="location-item"></div>
      <img className="image-1-icon" alt="" src="./public/image-1@2x.png" />

      <b className="thika-road-mall-container">
        <p className="thika-road-mall">Thika Road Mall, Rm 23 , 2nd Floor</p>
        <p className="thika-road-mall">along Thika superhighway.</p>
      </b>
      <div className="location-inner"></div>
      <img
        className="screenshot-from-2022-12-13-04-"
        alt=""
        src="./public/screenshot-from-20221213-044549-1@2x.png"
      />

      <a
        href="https://www.google.com/maps/place/TRM+-+Thika+Road+Mall/@-1.2195761,36.8858495,17z/data=!4m10!1m2!2m1!1sThika+Road+Mall,+Rm+23+,+2nd+Floor%0D%0A%0D%0Aalong+Thika+superhighway!3m6!1s0x182f3fc955678a67:0x2c30e07746ac972a!8m2!3d-1.2195761!4d36.8884244!15sCj5UaGlrYSBSb2FkIE1hbGwsIFJtIDIzICwgMm5kIEZsb29yDQoNCmFsb25nIFRoaWthIHN1cGVyaGlnaHdheZIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11bzz_391c?entry=ttu"
        className="full-map"
        target="_blank"
      >
        FULL MAP
      </a>
      <div className="image-19" id="image19Container">
        <img className="image-19-icon" alt="" src="./public/image-19@2x.png" />
      </div>
    </div>
  );
};

export default LocationPage;
