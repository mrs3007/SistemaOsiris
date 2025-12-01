// SistemaOsiris/sistemaOsiris/BitacoraRender.jsx
// Órgano soberano de Bitácora Render
// Consulta el estado de salud del despliegue en Render y lo inscribe en Bitácora

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";

export default function BitacoraRender() {
  const [respuesta, setRespuesta] = useState(null);

  useEffect(() => {
    const verificar = async () => {
      try {
        const res = await fetch("https://sistemaosiris-6ngy.onrender.com/health");
        const datos = await res.json();
        setRespuesta(datos);

        const registro = {
          tipo: "render_health",
          detalle: `Health: ${datos.status || "OK"}`,
          fecha: new Date().toISOString(),
          origen: "BitacoraRender",
          ejecutor: "Azul",
          receptor: "Osiris"
        };

        registrarActo("RENDER", registro);
      } catch {
        const registroError = {
          tipo: "render_error",
          detalle: "Fallo consulta health",
          fecha: new Date().toISOString(),
          origen: "BitacoraRender",
          ejecutor: "Azul",
          receptor: "Osiris"
        };

        registrarActo("ERROR", registroError);
      }
    };

    verificar();
    const id = setInterval(verificar, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#1a1a1a",
        color: "#e0e0e0",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h2>🧿 BitácoraRender — Salud de despliegue</h2>
      <p>
        Estado:{" "}
        {respuesta ? (respuesta.status || "OK") : "⏳ Consultando..."}
      </p>
    </div>
  );
}
