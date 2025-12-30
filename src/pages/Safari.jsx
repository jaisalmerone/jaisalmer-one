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
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Desert Safari in Jaisalmer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {SAFARIS.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
              overflow: "hidden"
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: "18px" }}>
              <h3>{item.title}</h3>
              <p style={{ color: "#555", fontSize: "14px" }}>
                {item.details}
              </p>

              <p style={{ marginTop: "6px" }}>
                <span style={{ textDecoration: "line-through", color: "#888" }}>
                  ₹{item.price}
                </span>{" "}
                <b style={{ color: "#2e7d32", fontSize: "18px" }}>
                  ₹{item.offer}
                </b>
              </p>

              <button
                onClick={() => bookSafari(item)}
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
