import React from "react";

const SAFARIS = [
  {
    title: "Jeep Safari",
    details: "45 minutes • Sunset dunes • Experienced driver",
    price: 599,
    oldPrice: 2000,
    image: "/images/jeepsafari.jpg"
  },
  {
    title: "Camel Safari",
    details: "Traditional ride • Desert experience",
    price: 199,
    oldPrice: 800,
    image: "/images/camelsafari.jpg"
  },
  {
    title: "ATV Ride",
    details: "High-adrenaline ride • Safety gear included",
    price: 999,
    oldPrice: 2000,
    image: "/images/atv.jpg"
  }
];

export default function Safari() {
  return (
    <div style={{ padding: "100px 20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Desert Safari in Jaisalmer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {SAFARIS.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              overflow: "hidden"
            }}
          >
            <div style={{ height: "220px", background: "#000" }}>
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

            <div style={{ padding: "18px" }}>
              <h3>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{s.details}</p>

              <p>
                <del>₹{s.oldPrice}</del>{" "}
                <b style={{ color: "#2e7d32" }}>₹{s.price}</b>
              </p>

              <button
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "12px",
                  background: "#25D366",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() =>
                  window.open(
                    "https://wa.me/917828722253?text=I want to book desert safari",
                    "_blank"
                  )
                }
              >
                Book on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
