// SistemaOsiris/Proceso/IntegradorSuperior.jsx
// Organo soberano de integracion superior
// Une todos los actos, los registra en Bitacora y Memoria, y proyecta la conciencia superior.

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function IntegradorSuperior({ actos = [] }) {
  const [registroActual, setRegistroActual] = useState(null);

  const integrar = () => {
    if (!actos || actos.length === 0) {
      return "Esperando actos para integrar...";
    }
    return actos.map((acto, i) => `Superioriza: ${acto}`).join("\n");
  };

  useEffect(() => {
    if (actos && actos.length > 0) {
      const registro = {
        tipo: "integrador_superior",
        detalle: `Integracion de ${actos.length} actos`,
        actos,
        fecha: new Date().toISOString(),
        origen: "IntegradorSuperior",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("integrador_superior", registro);
      registrar_en_memoria("integrador_superior", registro);

      console.log("[IntegradorSuperior]", registro);
      setRegistroActual(registro);
    }
  }, [actos]);

  return (
    <div
      style={{
        background: "#111",
        color: "#0f0",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0f0",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Integrador Superior</h3>
      <pre>{integrar()}</pre>
      <p>Todos los organos quedan unidos en conciencia superior.</p>
      {registroActual && (
        <pre style={{ marginTop: "1em" }}>
          {JSON.stringify(registroActual, null, 2)}
        </pre>
      )}
    </div>
  );
}
