import React, { useState } from "react";
import "../../assets/css/layouts/bottom-nav.css";

import {
  FaHome,
  FaBuilding,
  FaCubes,
  FaIndustry,
  FaFileInvoiceDollar,
  FaWhatsapp,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-radial-section">
      <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>
        {/* Center Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Home */}
        <button
          className="menu-item item1"
          onClick={() => onMenuClick("home")}
          aria-label="Home"
        >
          <FaHome />
        </button>

        {/* About */}
        <button
          className="menu-item item2"
          onClick={() => onMenuClick("about")}
          aria-label="About"
        >
          <FaBuilding />
        </button>

        {/* Products */}
        <button
          className="menu-item item3"
          onClick={() => onMenuClick("products")}
          aria-label="Products"
        >
          <FaCubes />
        </button>

        {/* Factory */}
        <button
          className="menu-item item4"
          onClick={() => onMenuClick("factory")}
          aria-label="Factory"
        >
          <FaIndustry />
        </button>

        {/* Contact / Quote */}
        <button
          className="menu-item item5"
          onClick={() => onMenuClick("contact")}
          aria-label="Get Quote"
        >
          <FaFileInvoiceDollar />
        </button>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919486544451"
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a href="tel:+919486544451" className="call-btn" aria-label="Call Us">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default Bottomnav;
