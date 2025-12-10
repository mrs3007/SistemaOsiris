// src/AppCI.jsx
// Variante del altar para despliegues CI/CD
// Muestra aviso visual dentro del altar además del banner externo

import React from "react";
import OsirisTotal from "../OsirisTotal.jsx";
import OsirisTotalVision from "../OsirisTotalVision.jsx";

function SafeSection({ title, children }) {
  try {
    return (
      <section style={{ marginBottom: "2rem" }}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  } catch (e) {
    console.error("⚠️ Falla en seccion:", title, e);
    return (
      <section style={{ marginBottom: "2rem", color: "#ff4d4f" }}>
        <h2>{title}</h2>
        <p>Falla en esta seccion. Revisa consola.</p>
      </section>
    );
  }
}

export default function AppCI() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#4B0082",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily
