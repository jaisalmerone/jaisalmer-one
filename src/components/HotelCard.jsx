import React from "react";

export default function HotelCard({ hotel, onBook }) {
  return (
    <div style={styles.card}>
      {/* LEFT IMAGE */}
      <img
        src={hotel.image}
        alt={hotel.name}
        style={styles.image}
        onError={(e) => (e.target.src = "/images/hero.jpg")}
      />

      {/* RIGHT CONTENT */}
      <div style={styles.content}>
        <h3 style={styles.title}>{hotel.name}</h3>

        <p style={styles.location}>📍 {hotel.location}</p>

        <p style={styles.amenities}>
          {hotel.amenities.join(" • ")}
        </p>

        <p style={styles.rating}>
          ⭐ {hotel.rating} ({hotel.reviews} reviews)
        </p>

        <div style={styles.bottom}>
          <strong style={styles.price}>₹{hotel.price} / night</strong>

          <button style={styles.button} onClick={() => onBook(hotel)}>
            Book on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "16px",
    background: "#fff",
    borderRadius: "16px",
    padding: "14px",
    marginBottom: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
  },
  image: {
    width: "260px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px"
  },
  content: {
    flex: 1
  },
  title: {
    margin: "0 0 6px"
  },
  location: {
    fontSize: "14px",
    color: "#666"
  },
  amenities: {
    fontSize: "14px",
    color: "#444",
    margin: "6px 0"
  },
  rating: {
    fontSize: "14px",
    color: "#0a7c2f"
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px"
  },
  price: {
    fontSize: "16px",
    color: "#1a7f37"
  },
  button: {
    background: "#25D366",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
