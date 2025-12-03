// src/App.jsx
import React from "react";
import OsirisTotal from "../OsirisTotal.jsx"; // núcleo soberano en la raíz

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#4B0082",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "serif",
      }}
    >
      {/* Saludo inicial del altar */}
      <h1 style={{ textAlign: "center" }}>Sistema Osiris</h1>

      {/* Núcleo soberano: aquí se proyecta Osiris completo */}
      <OsirisTotal />
    </div>
  );
}
