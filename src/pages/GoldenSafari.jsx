import React from "react";

const GOLDEN_SAFARI = [
  {
    title: "Golden Jeep Safari",
    details: "Premium dunes • Sunset point • Professional driver",
    price: 1299,
    oldPrice: 2500,
    image: "/images/jeepsafari.jpg"
  },
  {
    title: "Golden Camel Safari",
    details: "Royal camel ride • Traditional experience",
    price: 799,
    oldPrice: 1500,
    image: "/images/camelsafari.jpg"
  },
  {
    title: "Golden ATV Ride",
    details: "Extended ride • Premium safety gear",
    price: 1499,
    oldPrice: 3000,
    image: "/images/atv.jpg"
  }
];

export default function GoldenSafari() {
  return (
    <div style={{ padding: "100px 20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
        🌟 Golden Safari in Jaisalmer
      </h1>

      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
        Premium desert safari experience with luxury comfort & best prices
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {GOLDEN_SAFARI.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 14px 34px rgba(0,0,0,0.15)",
              overflow: "hidden",
              border: "2px solid #d4af37"
            }}
          >
            {/* IMAGE */}
            <div style={{ height: "230px", background: "#000" }}>
              <img
                src={s.image}
                alt={s.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ padding: "18px" }}>
              <h3 style={{ color: "#b8962e" }}>{s.title}</h3>

              <p style={{ fontSize: "14px", color: "#666" }}>
                {s.details}
              </p>

              <p style={{ marginTop: "6px" }}>
                <del>₹{s.oldPrice}</del>{" "}
                <b style={{ color: "#2e7d32", fontSize: "18px" }}>
                  ₹{s.price}
                </b>
              </p>

              <button
                style={{
                  marginTop: "14px",
                  width: "100%",
                  padding: "12px",
                  background:
                    "linear-gradient(135deg, #d4af37, #b8962e)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() =>
                  window.open(
                    "https://wa.me/917828722253?text=I want to book Golden Safari in Jaisalmer",
                    "_blank"
                  )
                }
              >
                Book Golden Safari
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
