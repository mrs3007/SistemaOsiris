// SistemaOsiris/Mutacion/MutacionNotasVivas.jsx
// Organo soberano de notas vivas de mutacion
// Registra notas vivas y las inscribe en Bitacora y Memoria

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function MutacionNotasVivas({ permiso }) {
  const [notas, setNotas] = useState([]);

  const registrarNota = (nota) => {
    let registro;

    if (!permiso) {
      registro = {
        tipo: "mutacion_nota",
        estado: "observado",
        motivo: "sin_permiso",
        nota,
        fecha: new Date().toISOString(),
        origen: "MutacionNotasVivas",
        ejecutor: "Azul",
        receptor: "Osiris"
      };
    } else {
      const nuevaNota = {
        fecha: new Date().toISOString(),
        contenido: nota
      };
      setNotas([...notas, nuevaNota]);

      registro = {
        tipo: "mutacion_nota",
        estado: "registrado",
        motivo: "nota_viva",
        nota: nuevaNota,
        fecha: new Date().toISOString(),
        origen: "MutacionNotasVivas",
        ejecutor: "Azul",
        receptor: "Osiris"
      };
    }

    registrarActo("mutacion_nota", registro);
    registrar_en_memoria("mutacion_nota", registro);

    console.log("[MutacionNotasVivas]", registro);
    return registro;
  };

  return (
    <div
      style={{
        background: "#111",
        color: "#0f0",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0f0",
        marginTop: "1em"
      }}
    >
      <h3>📝 MutacionNotasVivas</h3>
      <pre>{JSON.stringify(notas, null, 2)}</pre>
    </div>
  );
}
