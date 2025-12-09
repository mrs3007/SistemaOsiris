// SistemaOsiris/Vigilancia/DetectorSandbox.jsx
// Organo soberano de vigilancia de entornos sandbox
// Detecta permisos, firmas y origen sospechoso en APKs, registra hallazgos en Bitacora,
// proyecta HUD y emite respuesta ritual.

import React, { useEffect, useState } from "react";
import registrarActo from "../Registro/registrarActo.js";
import registrarEscaneoAPK from "../Registro/registrarEscaneoAPK.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { emitirRespuesta } from "../Emocional/RespuestaGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

const DetectorSandbox = ({ apk }) => {
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    if (!apk) return;

    const hallazgos = [];

    // 1. Revisar propiedades del APK
    if (apk.permisos?.includes("root")) hallazgos.push("Permiso root detectado");
    if (apk.permisos?.includes("overlay")) hallazgos.push("Permiso overlay sospechoso");
    if (apk.firmasInvalidas) hallazgos.push("Firma invalida detectada");
    if (apk.origen !== "oficial") hallazgos.push("APK de origen no oficial");

    // 2. Registrar cada hallazgo
    hallazgos.forEach((h) => {
      const registro = `${h} -> ${new Date().toISOString()}`;
      registrarEscaneoAPK(registro); // Registro especifico
      registrarActo("detector_sandbox", registro); // Registro generico
      setBitacora((prev) => [...prev, registro]);

      proyectarHUD({ mensaje: `⚠️ ${h}`, color: "red" });
      emitirRespuesta("alerta");
    });

    // 3. Si no hay hallazgos, confirmar APK soberano
    if (hallazgos.length === 0) {
      const registro = `APK limpio y soberano -> ${new Date().toISOString()}`;
      registrarEscaneoAPK(registro);
      registrarActo("detector_sandbox", registro);
      setBitacora((prev) => [...prev, registro]);

      proyectarHUD({ mensaje: obtenerFrase("afirmacion"), color: "green" });
      emitirRespuesta("afirmacion");
    }
  }, [apk]);

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "#ff8800",
        padding: "1rem",
        fontFamily: "monospace",
        border: "2px solid #ff8800",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <h3>🛡 Detector Sandbox</h3>
      <h4>📖 Bitacora</h4>
      <ul>
        {bitacora.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetectorSandbox;
