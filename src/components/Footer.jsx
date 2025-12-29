import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        marginTop: "60px",
        padding: "30px",
        background: "#2d2d2d",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Jaisalmer ONE</h3>

      <p style={{ margin: "5px 0", color: "#ccc" }}>
        Hotels | Safari | Rentals | Contact
      </p>

      <p style={{ margin: "5px 0" }}>
        📞 7828722253
      </p>

      <p style={{ margin: "5px 0" }}>
        📍 Jaisalmer, Rajasthan
      </p>

      <p style={{ marginTop: "15px", fontSize: "13px", color: "#aaa" }}>
        © 2025 Jaisalmer ONE. All rights reserved.
      </p>
    </div>
  );
}
