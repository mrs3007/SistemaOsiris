// SistemaOsiris/Diagnostico/DiagnosticoSoberano.jsx
import React, { useEffect, useState } from "react";

export default function DiagnosticoSoberano() {
  const [reporte, setReporte] = useState({ ok: false, pruebas: [], resumen: {} });

  useEffect(() => {
    const pruebas = [];

    const probar = (nombre, fn) => {
      try {
        const res = fn();
        pruebas.push({ nombre, ok: true, detalle: res || "ok" });
      } catch (e) {
        pruebas.push({ nombre, ok: false, error: String(e) });
      }
    };

    // Rutas y exportaciones
    probar("Import Vibracion.jsx y activarVibracion", () => {
      const mod = require("../Proceso/Vibracion.jsx");
      if (!mod.activarVibracion) throw new Error("activarVibracion no existe");
      return "activarVibracion presente";
    });

    probar("Import HUD3.jsx", () => {
      const mod = require("../Visual/HUD3.jsx");
      if (!mod.default) throw new Error("HUD3 export default ausente");
      return "HUD3 export default presente";
    });

    probar("Import LatidoVocalSellado.jsx", () => {
      const mod = require("../Latido/LatidoVocalSellado.jsx");
      if (!mod.default) throw new Error("LatidoVocalSellado export default ausente");
      return "LatidoVocalSellado export default presente";
    });

    probar("Import Bitacora.jsx registrarActo", () => {
      const mod = require("../Registro/Bitacora.jsx");
      if (!mod.registrarActo) throw new Error("registrarActo no existe");
      return "registrarActo presente";
    });

    probar("Import registrar_en_memoria.js", () => {
      const mod = require("../Memoria/registrar_en_memoria.js");
      if (!mod.registrar_en_memoria) throw new Error("registrar_en_memoria no existe");
      return "registrar_en_memoria presente";
    });

    // Prueba de invocacion en seco (sin efectos)
    probar("Invocacion en seco activarVibracion", () => {
      const { activarVibracion } = require("../Proceso/Vibracion.jsx");
      const r = activarVibracion({ tipo: "prueba", intensidad: "media" });
      return r?.tipo ? "invocacion correcta" : "sin retorno";
    });

    const ok = pruebas.every(p => p.ok);
    const resumen = {
      rutas_ok: pruebas.filter(p => p.ok).map(p => p.nombre),
      rutas_error: pruebas.filter(p => !p.ok).map(p => ({ nombre: p.nombre, error: p.error }))
    };

    const reporteFinal = { ok, pruebas, resumen, timestamp: new Date().toISOString() };
    setReporte(reporteFinal);
    console.log("[Diagnostico][Reporte]", reporteFinal);
  }, []);

  return (
    <div style={{ background: "#111", color: "#0ff", padding: "1em", fontFamily: "monospace" }}>
      <h3>Diagnostico soberano</h3>
      <pre>{JSON.stringify(reporte, null, 2)}</pre>
    </div>
  );
}
