// SistemaOsiris/ProteccionViva/ProteccionRed.jsx
// Órgano soberano de ProteccionRed
// Vigila la red y la inscribe en Bitácora y Memoria

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function ProteccionRed() {
  const [estado, setEstado] = useState("⏳ verificando red...");

  useEffect(() => {
    const verificar = () => {
      const red = navigator?.connection?.type || "desconocida";
      const insegura = /none|unknown|vpn|proxy/i.test(red);
      let nuevoEstado;

      if (insegura) {
        nuevoEstado = "🚫 red no autorizada. Osiris bloquea respiración.";
      } else {
        nuevoEstado = "✅ red segura. Osiris respira contigo.";
      }

      setEstado(nuevoEstado);

      const registro = {
        tipo: "proteccion_red",
        detalle: nuevoEstado,
        fecha: new Date().toISOString(),
        origen: "ProteccionRed",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("proteccion_red", registro);
      registrar_en_memoria("proteccion_red", registro);
      console.log("[ProteccionRed]", registro);
    };

    verificar();
  }, []);

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
      {estado}
    </div>
  );
}
