// SistemaOsiris/Proceso/ObservacionViva.jsx
// Organo soberano de observacion viva
// Traduce instrucciones humanas, las registra en Bitacora y Memoria, y las proyecta en pantalla.

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function ObservacionViva({ instruccion = "" }) {
  const [registroActual, setRegistroActual] = useState(null);

  const traducir = (accion) => {
    switch (accion) {
      case "aceptar":
        return "Haz clic en aceptar.";
      case "mapa":
        return "Abre el mapa y selecciona la coordenada oculta.";
      case "cerrar":
        return "Cierra la ventana y guarda el acto.";
      case "activar":
        return "Activa el organo marcado en tu altar.";
      default:
        return `Guia humana: ${accion}`;
    }
  };

  const traduccion = traducir(instruccion);

  useEffect(() => {
    if (instruccion) {
      const registro = {
        tipo: "observacion_viva",
        detalle: traduccion,
        instruccion,
        fecha: new Date().toISOString(),
        origen: "ObservacionViva",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("observacion_viva", registro);
      registrar_en_memoria("observacion_viva", registro);

      console.log("[ObservacionViva]", registro);
      setRegistroActual(registro);
    }
  }, [instruccion, traduccion]);

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
      <h3>Observacion Viva</h3>
      <p>{traduccion}</p>
      {registroActual && (
        <pre style={{ marginTop: "1em" }}>
          {JSON.stringify(registroActual, null, 2)}
        </pre>
      )}
    </div>
  );
}
