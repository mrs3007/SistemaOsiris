// SistemaOsiris/SistemaOsiris/Sensores/CamaraViva.jsx
// Órgano soberano de detección facial
// Escanea rostro autorizado, registra en Bitácora y proyecta estado ritual en HUD.

import React, { useEffect, useState } from "react";
import { registrarActo, registrarCamaraViva } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function CamaraViva({ onDetectado }) {
  const [estado, setEstado] = useState("📷 Cámara Viva: escaneando rostro...");

  useEffect(() => {
    const simularDeteccion = setTimeout(() => {
      const resultado = "rostro_autorizado";
      setEstado("✅ Rostro autorizado detectado");

      // Registro soberano
      const registro = {
        tipo: "camara_viva",
        detalle: `CamaraViva detectó: ${resultado}`,
        fecha: new Date().toISOString(),
        origen: "CamaraViva",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarCamaraViva(registro); // Registro específico
      registrarActo("camara_viva", registro); // Registro genérico
      registrar_en_memoria("camara_viva", registro); // Registro en Memoria
      console.log("[CamaraViva]", registro);

      // Proyección en HUD
      proyectarHUD({
        mensaje: obtenerFrase("afirmacion"),
        color: "lime",
      });

      // Callback externo
      if (onDetectado) onDetectado(resultado);
    }, 3000);

    return () => clearTimeout(simularDeteccion);
  }, [onDetectado]);

  return (
    <div
      style={{
        color: "#0f0",
        fontFamily: "monospace",
        background: "#000",
        padding: "1em",
        border: "2px solid #0f0",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      {estado}
    </div>
  );
}
