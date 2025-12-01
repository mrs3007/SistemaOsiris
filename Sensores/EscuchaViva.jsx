// SistemaOsiris/SistemaOsiris/Sensores/EscuchaViva.jsx
// Órgano soberano de escucha vocal
// Detecta voz autorizada, registra en Bitácora y proyecta estado ritual en HUD.

import React, { useEffect, useState } from "react";
import { registrarActo, registrarEscuchaViva } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function EscuchaViva({ onGesto }) {
  const [estado, setEstado] = useState("🎧 Escucha Viva: esperando gesto vocal...");

  useEffect(() => {
    const simularEscucha = setTimeout(() => {
      const resultado = "voz_autorizada";
      setEstado("✅ Voz autorizada detectada");

      // Registro soberano
      const registro = {
        tipo: "escucha_viva",
        detalle: `EscuchaViva detectó: ${resultado}`,
        fecha: new Date().toISOString(),
        origen: "EscuchaViva",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarEscuchaViva(registro); // Registro específico
      registrarActo("escucha_viva", registro); // Registro genérico
      registrar_en_memoria("escucha_viva", registro); // Registro en Memoria
      console.log("[EscuchaViva]", registro);

      // Proyección en HUD
      proyectarHUD({
        mensaje: obtenerFrase("afirmacion"),
        color: "cyan",
      });

      // Callback externo
      if (onGesto) onGesto(resultado);
    }, 4000);

    return () => clearTimeout(simularEscucha);
  }, [onGesto]);

  return (
    <div
      style={{
        color: "#0ff",
        fontFamily: "monospace",
        background: "#000",
        padding: "1em",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      {estado}
    </div>
  );
}
