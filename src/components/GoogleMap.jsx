import React from "react";

export default function GoogleMap() {
  return (
    <div style={{ marginTop: "40px", width: "100%" }}>
      <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
        📍 Jaisalmer ONE – Local Location
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1414199085807!2d70.5987209!3d26.8966124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947ddd2ddd8c441%3A0x834c694b71371ad2!2sAnaya%20Resort!5e1!3m2!1sen!2sin!4v1703663780000!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map – Jaisalmer ONE"
      ></iframe>
    </div>
  );
}
