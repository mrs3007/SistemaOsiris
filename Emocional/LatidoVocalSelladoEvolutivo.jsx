// SistemaOsiris/Emocional/LatidoVocalSelladoEvolutivo.jsx
// Organo soberano de vibracion emocional evolutiva

import React, { useEffect } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrarEnMemoria } from "../Memoria/registrar_en_memoria.js";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";

export default function LatidoVocalSelladoEvolutivo({ voz, intensidad = "default" }) {
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
      tipo: "latido_vocal_evolutivo",
      voz,
      intensidad,
      frase,
      fecha: new Date().toISOString(),
      origen: "LatidoVocalSelladoEvolutivo",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("latido_vocal_evolutivo", registro);
    registrarEnMemoria("latido_vocal_evolutivo", registro);

    proyectarHUD({ mensaje: frase, color });

    console.log("[LatidoVocalSelladoEvolutivo]", registro);
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
        boxShadow: `0 0 12px ${color}`,
        marginTop: "1em"
      }}
    >
      <h3>Latido Vocal Sellado Evolutivo</h3>
      <p>Voz inscrita: {voz}</p>
      <p>Intensidad: {intensidad}</p>
      <p>Frase ritual: {frase}</p>
    </div>
  );
}
