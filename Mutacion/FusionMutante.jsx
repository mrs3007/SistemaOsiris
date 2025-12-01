// SistemaOsiris/Mutacion/FusionMutante.jsx
// Organo soberano de fusion mutante
// Une dos eventos en una mutacion superior y registra en Bitacora y Memoria.

import React from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function FusionMutante({ eventoA, eventoB, permiso }) {
  const fusionar = () => {
    if (!permiso) {
      const registro = {
        tipo: "fusion_mutante",
        estado: "observado",
        motivo: "sin_permiso",
        eventos: [eventoA, eventoB],
        fecha: new Date().toISOString(),
        origen: "FusionMutante",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("fusion_mutante", registro);
      registrar_en_memoria("fusion_mutante", registro);

      console.log("[FusionMutante]", registro);
      return registro;
    }

    const resultado = `Fusion superior entre ${eventoA} y ${eventoB}`;
    const registro = {
      tipo: "fusion_mutante",
      estado: "fusionado",
      motivo: "mutacion_activa",
      resultado,
      fecha: new Date().toISOString(),
      origen: "FusionMutante",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("fusion_mutante", registro);
    registrar_en_memoria("fusion_mutante", registro);

    console.log("[FusionMutante]", registro);
    return registro;
  };

  return (
    <div style={{ backgroundColor: "#111", color: "#0ff", padding: "1rem", borderRadius: "8px" }}>
      <h3>FusionMutante</h3>
      <pre>{JSON.stringify(fusionar(), null, 2)}</pre>
    </div>
  );
}
