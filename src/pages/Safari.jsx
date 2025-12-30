import React from "react";

const SAFARIS = [
  {
    id: 1,
    title: "Jeep Safari",
    details: "45 minutes • Sunset dunes • Experienced driver",
    price: 2000,
    offer: 599,
    image: "/images/jeepsafari.jpg",
  },
  {
    id: 2,
    title: "Camel Safari",
    details: "Traditional ride • Desert experience",
    price: 800,
    offer: 199,
    image: "/images/camelsafari.jpg",
  },
  {
    id: 3,
    title: "ATV Ride",
    details: "High-adrenaline ride • Safety gear included",
    price: 2000,
    offer: 999,
    image: "/images/atv.jpg",
  },
  {
    id: 4,
    title: "Thar Safari",
    details: "Private 4x4 • Premium desert experience",
    price: 4500,
    offer: 2000,
    image: "/images/jeepsafari.jpg",
  },
];

export default function Safari() {
  const bookSafari = (item) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${item.title} in Jaisalmer.\nOffer Price: ₹${item.offer}`
    );
    window.open(`https://wa.me/917828722253?text=${msg}`, "_blank");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Desert Safari in Jaisalmer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {SAFARIS.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "18px" }}>
              <h3>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {item.details}
              </p>

              <p>
                <span style={{ textDecoration: "line-through", color: "#999" }}>
                  ₹{item.price}
                </span>{" "}
                <strong style={{ color: "green", fontSize: "18px" }}>
                  ₹{item.offer}
                </strong>
              </p>

              <button
                onClick={() => bookSafari(item)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
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
