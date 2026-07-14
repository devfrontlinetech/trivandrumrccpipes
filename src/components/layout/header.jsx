import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/image/logo/logo.png";
import "../../assets/css/layouts/header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenu(false);
  };

  return (
    <header className="header-container">
      <div className="header">
        {/* Logo */}
        <div className="head-logo" onClick={() => scrollToSection("home")}>
          <img src={Logo} alt="Trivandrum RCC Pipes" className="logo" />
        </div>

        {/* Navigation */}
        <nav className={menu ? "head-menu active" : "head-menu"}>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("products")}>Products</li>
            <li onClick={() => scrollToSection("factory")}>Factory</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>

        {/* Button */}
        <div className="head-btn">
          <button onClick={() => scrollToSection("contact")}>Get Quote</button>
        </div>

        {/* Mobile Menu */}
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
