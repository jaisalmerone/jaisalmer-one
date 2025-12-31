import GoldenSafari from "./pages/GoldenSafari";
<Route path="/golden-safari" element={<GoldenSafari />} />
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyWhatsApp from "./components/StickyWhatsApp";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Safari from "./pages/Safari";
import CarRentals from "./pages/CarRentals";
import BikeRentals from "./pages/BikeRentals";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/car-rentals" element={<CarRentals />} />
        <Route path="/bike-rentals" element={<BikeRentals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <a
  href="https://wa.me/917828722253"
  target="_blank"
  rel="noreferrer"
  className="sticky-whatsapp"
>
  💬 WhatsApp
</a>


      <Footer />

      {/* 🔥 Sticky WhatsApp Button (Mobile Only) */}
      <StickyWhatsApp />
    </>
  );
}
