import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderTop from "./components/layout/header-top";
import Header from "./components/layout/header";

import Hero from "./components/home-page/hero";
import Counter from "./components/home-page/counter";
import Product from "./components/home-page/products";
import Factory from "./components/home-page/factory";
import Contact from "./components/home-page/contact";

import Bottomnav from "./components/common/bottom-nav";
import Floating from "./components/common/float";
import Footer from "./components/layout/footer";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <HeaderTop />
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Counter />
        </section>

        <section id="products">
          <Product />
        </section>

        <section id="factory">
          <Factory />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <Bottomnav onMenuClick={handleMenuClick} />
      <Floating />
    </div>
  );
};

export default App;
