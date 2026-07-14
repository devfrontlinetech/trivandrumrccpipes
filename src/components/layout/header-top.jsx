import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "../../assets/css/layouts/header-top.css";

const Headertop = () => {
  return (
    <div className="headertop-container">
      <div className="headertop-left">
        <span>
          <FaPhoneAlt /> +91 94865 44451
        </span>

        <span>
          <FaEnvelope /> info@trivandrumrccpipes.in
        </span>

        <span>
          <FaMapMarkerAlt /> Thiruvananthapuram, Kerala
        </span>
      </div>

      <div className="headertop-right">
        <span>
          <FaClock /> Mon - Sat : 8:00 AM - 6:00 PM
        </span>

        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="/">
          <FaFacebookF />
        </a>

        <a href="/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Headertop;
