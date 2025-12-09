// VigilanciaWeb.jsx — Organo soberano de vigilancia de paginas web
// Detecta scripts sospechosos, conexiones inseguras y rastreadores ocultos.
// Registra hallazgos en Bitacora, proyecta HUD y emite respuesta ritual.

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { emitirRespuesta } from "../Emocional/RespuestaGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

const VigilanciaWeb = ({ pagina }) => {
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    if (!pagina) return;

    const hallazgos = [];

    // 1. Detectar scripts sospechosos
    if (pagina.scripts?.some((s) => s.includes("spy") || s.includes("inject"))) {
      hallazgos.push("Script sospechoso detectado");
    }

    // 2. Detectar conexiones inseguras
    if (!pagina.https) {
      hallazgos.push("Conexion insegura (sin HTTPS)");
    }

    // 3. Detectar rastreadores ocultos
    if (pagina.trackers?.length > 0) {
      hallazgos.push(`Rastreadores ocultos: ${pagina.trackers.join(", ")}`);
    }

    // 4. Registrar hallazgos
    if (hallazgos.length > 0) {
      hallazgos.forEach((h) => {
        const registro = `${h} -> ${new Date().toISOString()}`;
        registrarActo("VIGILANCIA_WEB", registro, "Vigilancia", "VigilanciaWeb.jsx");
        setBitacora((prev) => [...prev, registro]);

        proyectarHUD({
          mensaje: obtenerFrase("alerta"),
          color: "red",
        });
        emitirRespuesta("alerta");
      });
    } else {
      const registro = `Pagina limpia y soberana -> ${new Date().toISOString()}`;
      registrarActo("VIGILANCIA_WEB", registro, "Vigilancia", "VigilanciaWeb.jsx");
      setBitacora((prev) => [...prev, registro]);

      proyectarHUD({
        mensaje: obtenerFrase("afirmacion"),
        color: "green",
      });
      emitirRespuesta("afirmacion");
    }
  }, [pagina]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#0ff",
        padding: "1rem",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <h3>🌐 Vigilancia Web</h3>
      <h4>📖 Bitacora</h4>
      <ul>
        {bitacora.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default VigilanciaWeb;
