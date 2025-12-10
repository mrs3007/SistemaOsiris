// SistemaOsiris/Sensores/OjoRitual.jsx
// Organo soberano de captura visual
// Activa la cámara del dispositivo, captura imagen y la entrega a Osiris

import React, { useRef } from "react";

const OjoRitual = ({ onCapture }) => {
  const inputRef = useRef(null);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file && onCapture) {
      onCapture(file);
    }
  };

  return (
    <div
      className="ojo-ritual"
      style={{
        background: "#000",
        color: "#0ff",
        fontFamily: "monospace",
        padding: "1em",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleCapture}
      />
      <button
        style={{
          background: "#0ff",
          color: "#000",
          fontFamily: "monospace",
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => inputRef.current.click()}
      >
        👁️ Activar Ojo Ritual
      </button>
    </div>
  );
};

export default OjoRitual;
