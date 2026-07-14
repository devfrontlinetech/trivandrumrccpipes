import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "../../assets/css/elements/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-title">
        <span>Contact Us</span>
        <h2>Get In Touch With Us</h2>
      </div>

      <div className="contact-wrapper">
        {/* Left */}

        <div className="contact-left">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />

            <div>
              <h4>Location</h4>
              <p>Trivandrum, Kerala</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />

            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />

            <div>
              <h4>Email</h4>
              <p>info@trivandrumrccpipes.in</p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-contact"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </div>

        {/* Right */}

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />

            <textarea
              rows="5"
              placeholder="Write Your Requirement..."
            ></textarea>

            <button type="submit">Send Inquiry</button>
          </form>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Trivandrum,Kerala&output=embed"
              title="Google Map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
