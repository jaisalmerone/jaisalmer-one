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
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Desert Safari in Jaisalmer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}
      >
        {SAFARIS.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
              overflow: "hidden"
            }}
          >
            {/* IMAGE – FIXED HEIGHT (THIS WAS THE BUG) */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block"
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: "18px" }}>
              <h3 style={{ marginBottom: "6px" }}>{item.title}</h3>

              <p style={{ fontSize: "14px", color: "#666" }}>
                {item.details}
              </p>

              <p style={{ marginTop: "10px" }}>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    marginRight: "8px"
                  }}
                >
                  ₹{item.price}
                </span>
                <b style={{ color: "#2e7d32", fontSize: "18px" }}>
                  ₹{item.offer}
                </b>
              </p>

              <button
                onClick={() => bookSafari(item)}
                style={{
                  marginTop: "14px",
                  width: "100%",
                  padding: "12px",
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
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
    </div>
  );
}
