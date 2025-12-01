// SistemaOsiris/Separacion/Separacion.jsx
// Organo soberano de separacion
// Marca estado cerrado o activo y proyecta mensaje ritual.

import React from "react";

export default function Separacion({ estado, mensaje }) {
  const color = estado === "cerrado" ? "#ff0044" : "#00ff88";
  const texto = estado === "cerrado" ? "CERRADO" : "ACTIVO";

  return (
    <div
      style={{
        backgroundColor: "#111",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "monospace",
        color,
      }}
    >
      <h3>Separacion</h3>
      <p>Estado: {texto}</p>
      <p>{mensaje}</p>
    </div>
  );
}
