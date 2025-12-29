import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-gold" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="Jaisalmer ONE" />
        </div>

        {/* Menu */}
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/safari">Safari</Link>
          <Link to="/car-rentals">Car Rentals</Link>
          <Link to="/bike-rentals">Bike Rentals</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
