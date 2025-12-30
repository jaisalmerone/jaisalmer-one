import React from "react";

const SAFARIS = [
  {
    id: 1,
    title: "Jeep Safari",
    details: "45 minutes • Sunset dunes • Experienced driver",
    oldPrice: 2000,
    offer: 599,
    image:  "/images/jeepsafari.jpg"
  },
  {
    id: 2,
    title: "Camel Safari",
    details: "Traditional ride • Desert experience",
    oldPrice: 800,
    offer: 199,
    image:  "/images/atv.jpg"
  },
  {
    id: 3,
    title: "ATV Ride",
    details: "High-adrenaline ride • Safety gear included",
    oldPrice: 2000,
    offer: 999,
    image: "/images/atv.jpg"
  },
  {
    id: 4,
    title: "Thar Safari",
    details: "Private 4x4 • Premium desert experience",
    oldPrice: 4500,
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px"
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
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
              onError={(e) => {
                e.target.src = "/images/hero.jpg";
              }}
            />

            <div style={{ padding: "16px" }}>
              <h3>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>{item.details}</p>

              <p style={{ marginTop: "8px" }}>
                <span style={{ textDecoration: "line-through", color: "#999" }}>
                  ₹{item.oldPrice}
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
                  padding: "10px",
                  background: "#25D366",
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
    </div>
  );
}
