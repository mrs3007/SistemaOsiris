// SistemaOsiris/Visual/HUD3.jsx
// Órgano soberano de proyección HUD
// Muestra estado y latido en interfaz ritual

import React from "react";

const HUD3 = ({ estado, latido }) => {
  return (
    <div
      className={`hud3 hud-${estado}`}
      style={{
        background: "#000",
        color: estado === "autorizado" ? "#0f0" : estado === "bloqueado" ? "#f00" : "#0ff",
        fontFamily: "monospace",
        padding: "1em",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <p>🎯 Estado: {estado}</p>
      <p>🫀 Latido: {latido}</p>
    </div>
  );
};

export default HUD3;
