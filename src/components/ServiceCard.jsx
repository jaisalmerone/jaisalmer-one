import React from "react";

export default function ServiceCard({ item, onBook }) {
  return (
    <div className="listing-card">
      {/* LEFT IMAGE */}
      <div className="listing-image">
        <img
          src={item.img}
          alt={item.title}
          onError={(e) => (e.target.src = "/images/hero.jpg")}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="listing-content">
        <h3>{item.title}</h3>

        {item.location && (
          <p className="location">📍 {item.location}</p>
        )}

        {item.features && (
          <p className="features">{item.features}</p>
        )}

        <div className="price-row">
          <span className="old-price">{item.price}</span>
          <span className="new-price">{item.offer}</span>
        </div>

        <button onClick={() => onBook(item)}>
          Book on WhatsApp
        </button>
      </div>
    </div>
  );
}
