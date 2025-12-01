// SistemaOsiris/Latido/LatidoVocalSellado.jsx
// Órgano soberano de latido vocal sellado
// Registra la intensidad del latido vocal, proyecta frase ritual y lo inscribe en Bitácora y Memoria

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function LatidoVocalSellado({ gesto = "afirmacion" }) {
  const [intensidad, setIntensidad] = useState(0);

  const emitirLatido = (valor) => {
    setIntensidad(valor);

    const frase = obtenerFrase(gesto);
    const registro = {
      tipo: "latido_vocal_sellado",
      detalle: `Latido vocal (${gesto}) con intensidad ${valor}`,
      frase,
      fecha: new Date().toISOString(),
      origen: "LatidoVocalSellado",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    // Registro soberano
    registrarActo("latido_vocal_sellado", registro);
    registrar_en_memoria("latido_vocal_sellado", registro);

    // Proyección en HUD
    proyectarHUD({
      mensaje: frase,
      coordenada: { x: 80, y: 40 },
      color: gesto === "alerta" ? "red" : "cyan",
      simbolo: gesto === "alerta" ? "⚠" : "💓"
    });

    console.log("[LatidoVocalSellado]", registro);
  };

  return (
    <div
      style={{
        background: "#111",
        color: "#0ff",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Latido Vocal Sellado</h3>
      <p>Intensidad actual: {intensidad}</p>
      <button onClick={() => emitirLatido(intensidad + 1)}>Emitir latido</button>
    </div>
  );
}
