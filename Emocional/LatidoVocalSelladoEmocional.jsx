// SistemaOsiris/Emocional/LatidoVocalSelladoEmocional.jsx
// Organo soberano de vibracion emocional sellada

import React, { useEffect } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { obtenerFrase } from "./FraseSellada.jsx";

export default function LatidoVocalSelladoEmocional({ voz, intensidad = "default" }) {
  const colores = {
    alto: "#ff0044",
    medio: "#ffaa00",
    bajo: "#00ff88",
    default: "#888"
  };
  const color = colores[intensidad] || colores.default;
  const frase = obtenerFrase(intensidad);

  useEffect(() => {
    const registro = {
      tipo: "latido_vocal_emocional",
      voz,
      intensidad,
      frase,
      fecha: new Date().toISOString(),
      origen: "LatidoVocalSelladoEmocional",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("latido_vocal_emocional", registro);
    registrar_en_memoria("latido_vocal_emocional", registro);

    console.log("[LatidoVocalSelladoEmocional]", registro);
  }, [voz, intensidad]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "monospace",
        color,
        marginTop: "1em"
      }}
    >
      <h3>Latido Vocal Sellado (Emocional)</h3>
      <p>Voz: {voz}</p>
      <p>Intensidad: {intensidad}</p>
      <p>Frase ritual: {frase}</p>
    </div>
  );
}
