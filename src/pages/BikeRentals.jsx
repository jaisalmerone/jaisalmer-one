import React from "react";

const BIKES = [
  {
    name: "Scooty (Activa / Access)",
    price: "₹599 / day",
    image: "/images/scooty-poster.jpg", // use your poster image here
    features: ["Affordable", "Unlimited Fun", "24/7 Service"]
  },
  ,
  {
    name: "Economical Bike",
    price: "₹799 / day",
    image: "/images/himalayan-poster.jpg",
    features: ["Adventure Bike", "Long Ride Comfort", "Off-road Ready"]
  },
  {
    name: "Royal Enfield Classic",
    price: "₹1499 / day",
    image: "/images/classic-poster.jpg",
    features: ["Powerful Engine", "Desert Ready", "Comfort Ride"]
  }
];

export default function BikeRentals() {
  const bookBike = (bike) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${bike.name} in Jaisalmer`
    );
    window.open(`https://wa.me/917828722253?text=${msg}`, "_blank");
  };

  return (
    <div style={{ paddingTop: "90px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Bike Rentals in Jaisalmer
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          padding: "0 20px"
        }}
      >
        {BIKES.map((bike, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* FULL IMAGE – NO CROP */}
            <img
              src={bike.image}
              alt={bike.name}
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />

            {/* CONTENT */}
            <div
              style={{
                padding: "18px",
                background: "linear-gradient(180deg,#111,#000)",
                color: "#fff"
              }}
            >
              <h3 style={{ marginBottom: "6px" }}>{bike.name}</h3>

              <p style={{ color: "#25D366", fontWeight: "bold" }}>
                {bike.price}
              </p>

              {/* FEATURES */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "10px"
                }}
              >
                {bike.features.map((f, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#222",
                      padding: "6px 10px",
                      borderRadius: "20px",
                      fontSize: "12px"
                    }}
                  >
                    ✔ {f}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => bookBike(bike)}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#25D366",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                💬 Book on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
