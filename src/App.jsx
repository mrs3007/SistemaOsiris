import React from "react";
import OsirisTotal from "../OsirisTotal.jsx"; // Subimos un nivel para alcanzar el núcleo

export default function App() {
  return (
    <div style={{
      backgroundColor: "#000",
      color: "#4B0082",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "serif"
    }}>
      {/* Saludo inicial del altar */}
      <h1 style={{ textAlign: "center" }}>Sistema Osiris</h1>

      {/* Proyección del núcleo completo */}
      <OsirisTotal />
    </div>
  );
}
