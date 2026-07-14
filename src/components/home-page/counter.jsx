import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaIndustry, FaUsers, FaTruckMoving, FaAward } from "react-icons/fa";

import "../../assets/css/elements/counter.css";

const counterData = [
  {
    id: 1,
    icon: <FaIndustry />,
    end: 25,
    suffix: "+",
    title: "Years Experience",
  },
  {
    id: 2,
    icon: <FaUsers />,
    end: 750,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    id: 3,
    icon: <FaTruckMoving />,
    end: 3500,
    suffix: "+",
    title: "Bulk Deliveries",
  },
  {
    id: 4,
    icon: <FaAward />,
    end: 100,
    suffix: "%",
    title: "Quality Assurance",
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section id="counter" className="counter-container" ref={ref}>
      <div className="counter-left">
        <span className="counter-subtitle">Trusted RCC Pipe Manufacturer</span>

        <h2>
          Manufacturing Strong RCC Concrete Pipes for Kerala's Infrastructure
        </h2>

        <p>
          We manufacture premium quality RCC Pipes for drainage, sewerage,
          irrigation, culverts and infrastructure projects. Our commitment to
          quality, timely delivery and customer satisfaction has made us a
          trusted supplier across Kerala.
        </p>

        <a href="#contact" className="counter-btn">
          Request a Quote
        </a>
      </div>

      <div className="counter-right">
        {counterData.map((item) => (
          <div className="counter-card" key={item.id}>
            <div className="counter-icon">{item.icon}</div>

            <div className="counter-content">
              <h3>
                {inView && <CountUp start={0} end={item.end} duration={2.5} />}
                {item.suffix}
              </h3>

              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
