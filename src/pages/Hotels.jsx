import React from "react";

const HOTELS = [
  {
    id: 1,
    name: "Anaya Resort",
    location: "Sam Sand Dunes, Jaisalmer",
    price: 3500,
    rating: 4.6,
    reviews: 124,
    image: "/images/anayaresort.jpg",
    amenities: ["Breakfast Included", "Desert View", "Cultural Program"]
  },
  {
    id: 2,
    name: "Desert Pearl Camp",
    location: "Sam Road, Jaisalmer",
    price: 2800,
    rating: 4.4,
    reviews: 98,
    image: "/images/camelsafari.jpg",
    amenities: ["Luxury Tents", "Dinner Included", "Bonfire"]
  },
  {
    id: 3,
    name: "Royal Desert Camp",
    location: "Khuri Village, Jaisalmer",
    price: 3000,
    rating: 4.7,
    reviews: 156,
    image: "/images/jeepsafari.jpg",
    amenities: ["Swiss Tents", "Folk Dance", "Dinner Included"]
  }
];

export default function Hotels() {
  const bookHotel = (hotel) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${hotel.name} in Jaisalmer`
    );
    window.open(`https://wa.me/917828722253?text=${msg}`, "_blank");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Hotels & Resorts in Jaisalmer
      </h1>

      {HOTELS.map((hotel) => (
        <div
          key={hotel.id}
          style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            padding: "16px",
            marginBottom: "25px"
          }}
        >
          {/* IMAGE */}
          <img
            src={hotel.image}
            alt={hotel.name}
            style={{
              width: "260px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />

          {/* DETAILS */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 6px" }}>{hotel.name}</h3>
            <p style={{ color: "#777", fontSize: "14px" }}>
              📍 {hotel.location}
            </p>

            <p style={{ fontSize: "14px", color: "#555" }}>
              {hotel.amenities.join(" • ")}
            </p>

            <p style={{ marginTop: "10px" }}>
              ⭐ {hotel.rating} ({hotel.reviews} reviews)
            </p>

            <p style={{ marginTop: "6px", fontSize: "18px" }}>
              <b style={{ color: "#2e7d32" }}>₹{hotel.price}</b> / night
            </p>

            <button
              onClick={() => bookHotel(hotel)}
              style={{
                marginTop: "12px",
                padding: "10px 18px",
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

      {/* SEO CONTENT */}
      <section style={{ marginTop: "60px", lineHeight: "1.8" }}>
        <h2>Hotels in Jaisalmer – Budget, Luxury & Desert Stay</h2>
        <p>
          <strong>Jaisalmer ONE</strong> helps travelers book verified hotels,
          luxury resorts, heritage stays and desert camps near Sam Sand Dunes
          at the best local prices.
        </p>
        <p>
          📍 Jaisalmer, Rajasthan <br />
          📞 WhatsApp Booking: <strong>7828722253</strong>
        </p>
      </section>
    </div>
  );
}
