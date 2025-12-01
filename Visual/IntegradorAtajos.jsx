// SistemaOsiris/Integracion/IntegradorAtajos.jsx
// Órgano soberano de integración con Atajos de iOS
// Simula y confirma la conexión con Osiris, registra en Bitácora y Memoria, y proyecta estado ritual.

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";

export default function IntegradorAtajos({ onIntegrado }) {
  const [estado, setEstado] = useState("⏳ Integrando con Atajos de iOS...");

  useEffect(() => {
    const simularIntegracion = setTimeout(() => {
      const mensaje = "✅ Atajo conectado con Osiris en iOS";
      setEstado(mensaje);

      // Registro soberano
      const registro = {
        tipo: "integracion_atajos",
        detalle: mensaje,
        fecha: new Date().toISOString(),
        origen: "IntegradorAtajos",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("integracion_atajos", registro);
      registrar_en_memoria("integracion_atajos", registro);

      // Proyección en HUD
      proyectarHUD({ mensaje, color: "cyan" });

      // Confirmación en consola
      console.log("[IntegradorAtajos]", registro);

      // Callback externo
      if (onIntegrado) onIntegrado(mensaje);
    }, 2000);

    return () => clearTimeout(simularIntegracion);
  }, [onIntegrado]);

  return (
    <div
      style={{
        color: "#fff",
        background: "#111",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid cyan",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      🔗 {estado}
    </div>
  );
}
