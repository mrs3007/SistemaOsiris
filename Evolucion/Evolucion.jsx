// SistemaOsiris/Evolucion/Evolucion.jsx
// Organo soberano de evolucion
// Registra cada etapa y mensaje en Bitacora y Memoria, proyectando el estado en pantalla.

import React, { useEffect } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function Evolucion({ etapa = "default", mensaje = "" }) {
  const colores = {
    inicio: "#00aaff",   // azul: inicio
    transito: "#ffaa00", // dorado: transito
    mutacion: "#ff0044", // rojo: mutacion
    altar: "#00ff88",    // verde: altar
    default: "#888"      // gris: neutro
  };

  const color = colores[etapa] || colores.default;

  useEffect(() => {
    const registro = {
      tipo: "evolucion",
      etapa,
      mensaje,
      fecha: new Date().toISOString(),
      origen: "Evolucion",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("evolucion", registro);
    registrar_en_memoria("evolucion", registro);

    console.log("[Evolucion]", registro);
  }, [etapa, mensaje]);

  return (
    <div
      style={{
        backgroundColor: "#111",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "monospace",
        color,
        marginTop: "1em"
      }}
    >
      <h3>Evolucion</h3>
      <p>Etapa: {etapa}</p>
      <p>{mensaje}</p>
    </div>
  );
}
