import React from "react";
import { FaIndustry, FaCheckCircle, FaTruck, FaAward } from "react-icons/fa";

import factoryImg from "../../assets/image/default/counter-01.jpg";
import "../../assets/css/elements/factory.css";

const features = [
  {
    id: 1,
    icon: <FaIndustry />,
    title: "Modern Manufacturing",
    text: "Advanced RCC pipe production with strict quality standards.",
  },
  {
    id: 2,
    icon: <FaAward />,
    title: "Quality Assured",
    text: "Every pipe is tested for strength, durability and performance.",
  },
  {
    id: 3,
    icon: <FaTruck />,
    title: "Bulk Delivery",
    text: "Timely transportation across Kerala for projects of all sizes.",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Trusted Manufacturer",
    text: "Serving contractors, builders and government projects.",
  },
];

const Factory = () => {
  return (
    <section id="factory" className="factory-container">
      <div className="factory-wrapper">
        <div
          className="factory-image"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={factoryImg} alt="RCC Pipe Factory" />

          <div className="factory-badge">
            <h2>25+</h2>
            <span>Years Experience</span>
          </div>
        </div>

        <div
          className="factory-content"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span className="factory-subtitle">Our Manufacturing Facility</span>

          <h2>High Quality RCC Concrete Pipe Manufacturing in Trivandrum</h2>

          <p>
            Our factory is equipped with modern machinery and experienced
            professionals to manufacture premium RCC concrete pipes for
            drainage, sewerage, irrigation, culverts and infrastructure projects
            throughout Kerala.
          </p>

          <div className="factory-features">
            {features.map((item) => (
              <div className="factory-card" key={item.id}>
                <div className="factory-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="factory-btn">
            Request Bulk Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Factory;
