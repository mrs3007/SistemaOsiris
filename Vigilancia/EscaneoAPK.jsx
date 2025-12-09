// EscaneoAPK.jsx — Organo soberano de vigilancia de aplicaciones camufladas
// Detecta trampas, permisos sospechosos, firmas invalidas y origen no oficial.
// Registra hallazgos en Bitacora, proyecta HUD y emite latido emocional.

import React, { useEffect, useState } from "react";
import registrarActo from "../Registro/registrarActo.js";
import registrarEscaneoAPK from "../Registro/registrarEscaneoAPK.js";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

const EscaneoAPK = ({ apk }) => {
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    if (!apk) return;

    const hallazgos = [];

    // 1. Detectar trampas ocultas en nombre del APK
    const trampas = ["com.fake", "debug", "test", "emulator", "spy", "inject"];
    const trampasDetectadas = trampas.filter((p) => apk.nombre?.includes(p));
    if (trampasDetectadas.length > 0) {
      hallazgos.push(`APK contiene trampas: ${trampasDetectadas.join(", ")}`);
    }

    // 2. Revisar permisos sospechosos
    if (apk.permisos?.includes("CAMERA") && !apk.funciones.includes("uso_camara")) {
      hallazgos.push("Permiso de camara sin funcion declarada");
    }
    if (apk.permisos?.includes("MICROPHONE") && !apk.funciones.includes("uso_microfono")) {
      hallazgos.push("Permiso de microfono sin funcion declarada");
    }
    if (apk.permisos?.includes("LOCATION") && !apk.funciones.includes("uso_localizacion")) {
      hallazgos.push("Permiso de localizacion sin funcion declarada");
    }

    // 3. Revisar firmas y origen
    if (!apk.firmaValida) hallazgos.push("Firma digital invalida");
    if (apk.origen !== "oficial") hallazgos.push("APK de origen no oficial");

    // 4. Registrar hallazgos
    if (hallazgos.length > 0) {
      hallazgos.forEach((h) => {
        const registro = `${h} -> ${new Date().toISOString()}`;
        registrarEscaneoAPK(registro); // Registro específico en Bitacora
        registrarActo("escaneo_apk", registro); // Registro genérico en Bitacora
        setBitacora((prev) => [...prev, registro]);

        proyectarHUD({
          mensaje: obtenerFrase("alerta"),
          color: "orange",
          coordenada: { x: 100, y: 40 },
        });
        emitirLatido("dolor");
      });
    } else {
      const registro = `APK limpio y soberano -> ${new Date().toISOString()}`;
      registrarEscaneoAPK(registro);
      registrarActo("escaneo_apk", registro);
      setBitacora((prev) => [...prev, registro]);

      proyectarHUD({ mensaje: "✔️ APK soberano", color: "green" });
      emitirLatido("afirmacion");
    }
  }, [apk]);

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
      <h3>📱 Escaneo APK</h3>
      <h4>📖 Bitacora</h4>
      <ul>
        {bitacora.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default EscaneoAPK;
