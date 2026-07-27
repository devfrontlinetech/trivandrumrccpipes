import React from "react";
import { FaArrowRight, FaChevronDown, FaCheckCircle } from "react-icons/fa";

import "../../assets/css/elements/hero.css";
import HeroVideo from "../../assets/video/hero-section/hero-video.mp4";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="hero-section"
      aria-label="Trivandrum RCC Concrete Pipes"
    >
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative Shapes */}
      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>

      {/* Main Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-tag">
            <span></span>
            Trusted RCC Concrete Pipe Manufacturer
          </div>

          {/* Main Heading */}
          <h1>
            Premium RCC Concrete Pipes
            <strong>Manufactured in Trivandrum</strong>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Manufacturing and supplying high-quality RCC concrete pipes, Hume
            pipes, NP2, NP3 and NP4 pipes for drainage, irrigation, sewerage,
            culverts and infrastructure projects across Kerala.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => scrollToSection("products")}
            >
              Explore Our Products
              <FaArrowRight />
            </button>

            <button
              className="hero-btn hero-btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              Get a Quote
            </button>
          </div>

          {/* Trust Points */}
          <div className="hero-features">
            <div className="hero-feature">
              <FaCheckCircle />
              <span>Quality Manufacturing</span>
            </div>

            <div className="hero-feature">
              <FaCheckCircle />
              <span>Bulk Orders</span>
            </div>

            <div className="hero-feature">
              <FaCheckCircle />
              <span>Timely Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        className="scroll-down-btn"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
      >
        <span>Scroll to Explore</span>
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;
