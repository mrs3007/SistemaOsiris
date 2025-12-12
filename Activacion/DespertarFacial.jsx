// SistemaOsiris/Activacion/DespertarFacial.jsx
// Activación soberana al detectar el rostro autorizado

import React, { useEffect } from "react";
import LatidoVocalSelladoEvolutivo from "../Emocional/LatidoVocalSelladoEvolutivo.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function DespertarFacial({ rostroDetectado, intensidad = "medio" }) {
  useEffect(() => {
    if (!rostroDetectado) return;

    const frase = obtenerFrase("afirmacion");

    proyectarHUD({
      mensaje: frase,
      coordenada: { x: 80, y: 40 },
      color: "cyan",
      simbolo: "✨"
    });

    console.log("[DespertarFacial] Rostro detectado:", rostroDetectado);
  }, [rostroDetectado]);

  return (
    <div
      style={{
        background: "#000",
        padding: "1rem",
        borderRadius: "8px",
        border: "2px solid #0ff",
        color: "#0ff",
        fontFamily: "monospace",
        marginTop: "1rem"
      }}
    >
      <h2>Despertar Facial</h2>
      <p>Rostro detectado: {rostroDetectado || "Ninguno"}</p>

      {rostroDetectado && (
        <LatidoVocalSelladoEvolutivo
          voz={rostroDetectado}
          intensidad={intensidad}
        />
      )}
    </div>
  );
}
