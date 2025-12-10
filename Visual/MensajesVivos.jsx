// SistemaOsiris/Visual/MensajesVivos.jsx
// Organo soberano de proyeccion de mensajes vivos
// Muestra mensajes rituales en la interfaz con estilo marcado

import React from "react";

const MensajesVivos = ({ mensaje }) => {
  return (
    <div
      className="mensaje-vivo"
      style={{
        background: "#111",
        color: "#0ff",
        fontFamily: "monospace",
        padding: "1em",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <p>📡 {mensaje}</p>
    </div>
  );
};

export default MensajesVivos;
