// src/App.jsx
import React, { useEffect, useState } from "react";

// Nucleo
import OsirisTotal from "../SistemaOsiris/OsirisTotal.jsx";
import OsirisTotalVisual from "../SistemaOsiris/OsirisTotalVisual.jsx";

// Diario
import Bitacora, { registrarActo } from "../SistemaOsiris/Registro/Bitacora.jsx";
import BitacoraRender from "../SistemaOsiris/BitacoraRender.jsx";

// Render
import { activarPorRostro, iniciarLatidoRender } from "../SistemaOsiris/Render/RenderCore.jsx";

export default function App() {
  const [presente, setPresente] = useState(false);
  const [saludo, setSaludo] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let stop;
    try {
      const ok = activarPorRostro();
      setPresente(ok);
      registrarActo("PRESENCIA", ok ? "Rostro reconocido" : "No reconocido", "App", "App.jsx", "Dayana");

      if (ok) {
        const actualizarSaludo = () => {
          const h = new Date().getHours();
          setSaludo(
            h < 12
              ? "☀️ Buenos dias, Dayana."
              : h < 19
              ? "🌤️ Buenas tardes, Dayana."
              : "🌙 Buenas noches, Dayana."
          );
        };
        actualizarSaludo();

        stop = iniciarLatidoRender(() => {
          actualizarSaludo();
          registrarActo("LATIDO", "Pulso actualizado", "App", "App.jsx", "Osiris");
        });
      }
    } catch (err) {
      setError(err.message);
      registrarActo("ERROR", err.message, "App", "App.jsx", "Sistema");
    }
    return () => {
      if (stop) stop();
      registrarActo("CIERRE", "Latido detenido y limpieza realizada", "App", "App.jsx", "Sistema");
    };
  }, []);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "15%", color: "red" }}>
        <h1>⚠️ Error en el sistema</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!presente) {
    return (
      <div style={{ textAlign: "center", marginTop: "15%", fontFamily: "serif", color: "#4B0082" }}>
        <h1>🧿 Osiris espera tu presencia</h1>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "serif", color: "#4B0082", padding: 24, maxWidth: 1080, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>{saludo}</h1>

      {/* Nucleo logico */}
      <details style={{ marginBottom: 16 }}>
        <summary style={{ cursor: "pointer" }}>Ver nucleo OsirisTotal</summary>
        <OsirisTotal />
      </details>

      {/* Proyeccion visual */}
      <OsirisTotalVisual />

      <Bitacora />
      <BitacoraRender />
    </div>
  );
}
