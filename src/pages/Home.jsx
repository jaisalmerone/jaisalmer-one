import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleMap from "../components/GoogleMap";
import { images } from "../utils/images";

const SECTIONS = [
  {
    title: "Hotels & Resorts",
    desc: "Luxury, budget & desert camps near Sam Sand Dunes",
    price: "Starting ₹2200 / night",
    img: images.hotel,
    whatsapp: "Hello, I want to book hotels in Jaisalmer",
    link: "/hotels"
  },
  {
    title: "Desert Safari",
    desc: "Jeep safari, camel safari & ATV rides",
    price: "Starting ₹600",
    img: images.safari, // ✅ FIXED
    whatsapp: "Hello, I want to book desert safari in Jaisalmer",
    link: "/safari"
  },
  {
    title: "Car Rentals",
    desc: "Sedan, SUV, tempo traveller with driver",
    price: "Starting ₹2500 / day",
    img: images.car,
    whatsapp: "Hello, I want to book car rental in Jaisalmer",
    link: "/car-rentals"
  },
  {
    title: "Bike Rentals",
    desc: "Scooty & Royal Enfield bikes available",
    price: "Starting ₹600 / day",
    img: images.bike,
    whatsapp: "Hello, I want to book bike rental in Jaisalmer",
    link: "/bike-rentals"
  }
];

export default function Home() {
  const navigate = useNavigate();

  const bookWhatsApp = (text) => {
    window.open(
      `https://wa.me/917828722253?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* ================= HERO ================= */}
      <div
        className="hero-wrapper"
        onClick={() => navigate("/hotels")}
        style={{ cursor: "pointer" }}
      >
        <img
          src={images.hero}
          alt="Jaisalmer New Year Banner"
          className="hero-image"
        />
      </div>

      {/* ================= INTRO ================= */}
      <section style={{ textAlign: "center", padding: "30px 20px" }}>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
          Book Hotels, Desert Safari, Car & Bike Rentals in Jaisalmer —
          trusted local service with best prices and instant WhatsApp support.
        </p>

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          📍 Jaisalmer, Rajasthan | 📞 7828722253
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Jaisalmer ONE – Book Everything in One Place
      </h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {SECTIONS.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.25s ease"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* IMAGE */}
              <div
                style={{
                  background: "#000",
                  height: "260px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "18px" }}>
                <h3>{item.title}</h3>
                <p style={{ color: "#555", fontSize: "14px" }}>
                  {item.desc}
                </p>

                <p
                  style={{
                    marginTop: "6px",
                    color: "#2e7d32",
                    fontWeight: "bold"
                  }}
                >
                  {item.price}
                </p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    bookWhatsApp(item.whatsapp);
                  }}
                  style={{
                    marginTop: "14px",
                    width: "100%",
                    padding: "12px",
                    background: "#25D366",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Book on WhatsApp
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <GoogleMap />
    </div>
  );
}
