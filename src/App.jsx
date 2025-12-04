// src/App.jsx
import React from "react";
import OsirisTotal from "../OsirisTotal.jsx";              // núcleo soberano
import OsirisTotalVision from "../OsirisTotalVision.jsx";  // espejo visual

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
      <h1 style={{ textAlign: "center" }}>🌌 Sistema Osiris</h1>

      {/* Núcleo soberano: aquí se proyecta Osiris completo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>⚙️ Núcleo Osiris</h2>
        <OsirisTotal />
      </section>

      {/* Espejo visual: proyección viva */}
      <section>
        <h2>🪞 Proyección Osiris</h2>
        <OsirisTotalVision />
      </section>
    </div>
  );
}
