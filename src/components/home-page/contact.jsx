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
              <p>+91 94865 44451</p>
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
            href="https://wa.me/919486544451"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040607.5998904533!2d72.05717501249998!3d8.508521300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd954afb907%3A0x255fd5ef5b26e02a!2sTrivandrum%20RCC%20Cement%20Pipes%20Hume%20Pipes%20-%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1784094462422!5m2!1sen!2sin"
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
