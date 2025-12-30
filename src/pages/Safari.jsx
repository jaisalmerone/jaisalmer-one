import React from "react";

const SAFARIS = [
  {
    id: 1,
    title: "Jeep Safari",
    details: "45 minutes • Sunset dunes • Experienced driver",
    price: 2000,
    offer: 599,
    image: "/images/jeepsafari.jpg", // ✅ FIXED
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
    image: "/images/jeepsafari.jpg", // ✅ FIXED
  },
];

export default function Safari() {
  const bookSafari = (item) => {
    const msg = encodeURIComponent(
      `Hello, I want to book ${item.title} in Jaisalmer. Offer price ₹${item.offer}`
    );
    window.open(`https://wa.me/917828722253?text=${msg}`, "_blank");
  };

  return (
    <div className="page">
      <h1>Desert Safari in Jaisalmer</h1>

      <div className="card-grid">
        {SAFARIS.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <p>
              <del>₹{item.price}</del>{" "}
              <strong>₹{item.offer}</strong>
            </p>
            <button onClick={() => bookSafari(item)}>
              Book on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
