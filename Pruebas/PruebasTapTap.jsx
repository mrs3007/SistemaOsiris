// SistemaOsiris/Pruebas/PruebaTapTap.jsx
// Organo soberano de PruebaTapTap
// Ejecuta TapTap desde OsirisTotal y lo inscribe en Bitacora y Memoria

import React, { useEffect, useState } from "react";
import { ejecutarTapTap } from "../OsirisTotal.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function PruebaTapTap() {
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    const r = ejecutarTapTap();
    setResultado(r);

    const registro = {
      tipo: "prueba_taptap",
      detalle: `Resultado: ${r}`,
      archivo: "PruebaTapTap.jsx",
      fecha: new Date().toISOString(),
      origen: "PruebaTapTap",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("prueba_taptap", registro);
    registrar_en_memoria("prueba_taptap", registro);

    console.log("[PruebaTapTap]", registro);
  }, []);

  return (
    <div style={{
      background: "#111",
      color: "#0ff",
      padding: "1em",
      fontFamily: "monospace",
      border: "2px solid #0ff",
      marginTop: "1em"
    }}>
      <h2>🟣 Prueba de ejecución TapTap</h2>
      <p>{resultado}</p>
    </div>
  );
}
