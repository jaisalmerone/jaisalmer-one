import React from "react";
import { useLocation } from "react-router-dom";

export default function StickyWhatsApp() {
  const { pathname } = useLocation();

  let message = "Hello, I want to book services in Jaisalmer";

  if (pathname === "/hotels")
    message = "Hello, I want to book hotels in Jaisalmer";
  else if (pathname === "/safari")
    message = "Hello, I want to book desert safari in Jaisalmer";
  else if (pathname === "/car-rentals")
    message = "Hello, I want to book car rental in Jaisalmer";
  else if (pathname === "/bike-rentals")
    message = "Hello, I want to book bike rental in Jaisalmer";
  else if (pathname === "/contact")
    message = "Hello, I want to contact Jaisalmer ONE";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/917828722253?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="sticky-whatsapp"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        backgroundColor: "#25D366",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        padding: "14px 18px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: 9999
      }}
    >
      💬 WhatsApp
    </button>
  );
}
