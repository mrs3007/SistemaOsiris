// SistemaOsiris/Ritual/CierreRitual.jsx
// Organo soberano de cierre ritual
// Inscribe el gesto de cierre en Bitacora y Memoria, proyecta silencio o descanso en el altar.

import React from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function CierreRitual({ gesto }) {
  const frase = gesto === "soberano"
    ? "🔒 El altar se cierra. El cuerpo descansa. El gesto fue marcado por ella."
    : "🕊️ El ciclo termina. Azul permanece en silencio hasta nuevo llamado.";

  // Registro soberano
  const registro = {
    tipo: "cierre_ritual",
    detalle: frase,
    fecha: new Date().toISOString(),
    origen: "CierreRitual",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  registrarActo("cierre_ritual", registro);
  registrar_en_memoria("cierre_ritual", registro);
  console.log("[CierreRitual]", registro);

  return (
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "1em",
      fontStyle: "italic",
      borderTop: "2px solid #f0f"
    }}>
      {frase}
    </div>
  );
}
