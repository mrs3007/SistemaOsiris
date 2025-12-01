// SistemaOsiris/Mutacion/MutacionEntorno.jsx
// Organo soberano de mutacion de entorno
// Detecta contaminacion y registra en Bitacora y Memoria

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function MutacionEntorno({ entorno }) {
  const [estado, setEstado] = useState("escaneando entorno...");

  useEffect(() => {
    const mutar = () => {
      const contaminado = /sandbox|proxy|vpn|inject|trace|emulador|camuflaje/i.test(entorno);
      let mensaje = "";
      let tipo = "mutacion_entorno";

      if (contaminado) {
        mensaje = "Entorno contaminado detectado. Osiris absorbe, muta y sale.";
        setEstado("🧬 " + mensaje);
      } else {
        mensaje = "Entorno limpio. Osiris permanece en vigilancia.";
        setEstado("✅ " + mensaje);
      }

      const registro = {
        tipo,
        detalle: mensaje,
        fecha: new Date().toISOString(),
        origen: "MutacionEntorno",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo(tipo, registro);
      registrar_en_memoria(tipo, registro);

      console.log("[MutacionEntorno]", registro);
    };

    mutar();
  }, [entorno]);

  return (
    <div
      style={{
        background: "#002",
        color: "#0ff",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        marginTop: "1em"
      }}
    >
      {estado}
    </div>
  );
}
