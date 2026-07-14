import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../assets/css/elements/hero.css";
import HeroVideo from "../../assets/video/hero-section/hero-video.mp4";

const heroData = [
  {
    id: 1,
    tag: "Trusted RCC Concrete Pipe Manufacturer",
    title: "Premium RCC Concrete Pipes",
    title2: "Manufactured in Trivandrum",
    description:
      "Manufacturing and supplying high-quality RCC Concrete Pipes, Hume Pipes, NP2, NP3 & NP4 Pipes for drainage, irrigation, sewerage, culverts and infrastructure projects across Kerala. Bulk orders with timely delivery and competitive pricing.",
    buttons: [
      {
        id: 1,
        text: "View Products",
        link: "#products",
        className: "btn-primary",
      },
      {
        id: 2,
        text: "Get Free Quote",
        link: "#contact",
        className: "btn-outline",
      },
    ],
  },
];

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero-container">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      {heroData.map((hero) => (
        <div className="hero-content" key={hero.id}>
          <span className="hero-tag">{hero.tag}</span>

          <h1>
            {hero.title}
            <br />
            {hero.title2}
          </h1>

          <p>{hero.description}</p>

          {/* Scroll Down Button */}
          <button
            className="scroll-down-btn"
            onClick={scrollToAbout}
            aria-label="Scroll to About"
          >
            <FaChevronDown />
          </button>
        </div>
      ))}
    </section>
  );
};

export default Hero;
