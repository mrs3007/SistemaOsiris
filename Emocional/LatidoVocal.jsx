// SistemaOsiris/Emocional/LatidoVocal.jsx
// Organo soberano de vibracion emocional
// Emite gestos rituales (afirmacion, dolor, alerta), registra en Bitacora y proyecta el pulso.

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function LatidoVocal({ voz }) {
  const [latido, setLatido] = useState(null);

  const activarLatido = (gesto = "afirmacion") => {
    const frase = obtenerFrase(gesto);
    const pulso = `Latido vocal (${gesto}) con voz: ${voz} → ${frase}`;
    setLatido(pulso);

    // Registro en Bitacora y Memoria
    const registro = {
      tipo: "latido_vocal",
      gesto,
      voz,
      frase,
      fecha: new Date().toISOString(),
      origen: "LatidoVocal",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("latido_vocal", registro);
    registrar_en_memoria("latido_vocal", registro);

    // Proyeccion en HUD
    proyectarHUD({
      mensaje: frase,
      color: gesto === "dolor" ? "red" : gesto === "alerta" ? "orange" : "yellow"
    });

    console.log("[LatidoVocal]", registro);
  };

  return (
    <div
      style={{
        background: "#111",
        color: "#ff0",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #ff0",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Latido Vocal</h3>
      <button onClick={() => activarLatido("afirmacion")}>Activar Afirmacion</button>
      <button onClick={() => activarLatido("dolor")}>Activar Dolor</button>
      <button onClick={() => activarLatido("alerta")}>Activar Alerta</button>
      {latido && <p>{latido}</p>}
    </div>
  );
}
