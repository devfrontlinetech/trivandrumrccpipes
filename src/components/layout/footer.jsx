import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../../assets/image/logo/logo.png";
import "../../assets/css/layouts/footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Company */}

        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />

          <p>
            Leading RCC Concrete Pipe Manufacturer and Bulk Supplier in
            Trivandrum, Kerala. Delivering durable concrete solutions for
            drainage, sewerage and infrastructure projects.
          </p>

          <div className="footer-social">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToSection("home")}>
              <FaArrowRight /> Home
            </li>

            <li onClick={() => scrollToSection("about")}>
              <FaArrowRight /> About
            </li>

            <li onClick={() => scrollToSection("products")}>
              <FaArrowRight /> Products
            </li>

            <li onClick={() => scrollToSection("factory")}>
              <FaArrowRight /> Factory
            </li>

            <li onClick={() => scrollToSection("contact")}>
              <FaArrowRight /> Contact
            </li>
          </ul>
        </div>

        {/* Products */}

        <div className="footer-col">
          <h3>Our Products</h3>

          <ul>
            <li>
              <FaArrowRight /> NP2 RCC Pipes
            </li>
            <li>
              <FaArrowRight /> NP3 RCC Pipes
            </li>
            <li>
              <FaArrowRight /> NP4 RCC Pipes
            </li>
            <li>
              <FaArrowRight /> Hume Pipes
            </li>
            <li>
              <FaArrowRight /> Concrete Collars
            </li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-col">
          <h3>Contact Info</h3>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt />
              pattom palace, 71, Road, Gowreesapattom, Pattom,
              Thiruvananthapuram, Kerala 695004
            </p>
            <p>
              <FaPhoneAlt />
              +91 94865 44451
            </p>

            <p>
              <FaEnvelope />
              info@trivandrumrccpipes.in
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          Copyright {new Date().getFullYear()} RCC Pipes. Designed By{" "}
          <a
            href="https://frontlinetechnologies.org/"
            rel="noreferrer"
            target="_blank"
          >
            Frontline Technologies
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
