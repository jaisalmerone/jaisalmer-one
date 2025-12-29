import React from "react";

const SAFARIS = [
  {
    id: 1,
    title: "Jeep Safari",
    details: "45 minutes • Sunset dunes • Experienced driver",
    price: 2000,
    offer: 599,
    image: "/images/jeepsafari.jpg"
  },
  {
    id: 2,
    title: "Camel Safari",
    details: "Traditional ride • Desert experience",
    price: 800,
    offer: 199,
    image: "/images/camelsafari.jpg"
  },
  {
    id: 3,
    title: "ATV Ride",
    details: "High-adrenaline ride • Safety gear included",
    price: 2000,
    offer: 999,
    image: "/images/atv.jpg"
  },
  {
    id: 4,
    title: "Thar Safari",
    details: "Private 4x4 • Premium desert experience",
    price: 4500,
    offer: 2000,
    image: "/images/jeepsafari.jpg"
  }
];

export default function Safari() {
  const bookSafari = (item) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${item.title} in Jaisalmer. Offer price ₹${item.offer}`
    );
    window.open(`https://wa.me/917828722253?text=${msg}`, "_blank");
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Desert Safari Experiences in Jaisalmer
      </h1>

      {SAFARIS.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            padding: "16px",
            marginBottom: "24px",
            alignItems: "center"
          }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "280px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0
            }}
          />

          {/* Content */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>{item.title}</h3>

            <p style={{ fontSize: "14px", color: "#666" }}>
              {item.details}
            </p>

            <p style={{ marginTop: "8px" }}>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#999",
                  marginRight: "10px"
                }}
              >
                ₹{item.price}
              </span>
              <strong style={{ color: "#2e7d32", fontSize: "18px" }}>
                ₹{item.offer}
              </strong>{" "}
              / person
            </p>

            <button
              onClick={() => bookSafari(item)}
              style={{
                marginTop: "12px",
                padding: "12px 18px",
                backgroundColor: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              Book on WhatsApp
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
