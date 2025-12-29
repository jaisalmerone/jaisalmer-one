import React from "react";

const CARS = [
  {
    id: 1,
    name: "Sedan (Dzire / Etios)",
    details: "AC • Driver Included • Ideal for city travel",
    price: 2500,
    image: "/images/swift.jpg"
  },
  {
    id: 2,
    name: "SUV (Innova / Ertiga)",
    details: "AC • Spacious • Comfortable for family",
    price: 3500,
    image: "/images/Innova.jpg"
  },
  {
    id: 3,
    name: "Premium SUV (Scorpio / Fortuner)",
    details: "Luxury ride • Desert travel • Powerful performance",
    price: 5000,
    image: "/images/Fortuner.jpg"
  },
  {
    id: 4,
    name: "Tempo Traveller",
    details: "12–17 Seater • Group travel • Driver included",
    price: 6500,
    image: "/images/Tempo.jpg"
  }
];

export default function CarRentals() {
  const bookCar = (car) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${car.name} in Jaisalmer. Price ₹${car.price} per day`
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
        Car Rentals in Jaisalmer
      </h1>

      {CARS.map((car) => (
        <div
          key={car.id}
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
          {/* IMAGE */}
          <img
            src={car.image}
            alt={car.name}
            style={{
              width: "280px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0
            }}
          />

          {/* CONTENT */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>{car.name}</h3>

            <p style={{ fontSize: "14px", color: "#666" }}>
              {car.details}
            </p>

            <p style={{ marginTop: "8px", fontSize: "18px" }}>
              <b style={{ color: "#2e7d32" }}>₹{car.price}</b> / day
            </p>

            <button
              onClick={() => bookCar(car)}
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
