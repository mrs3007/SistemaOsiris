// SistemaOsiris/Proceso/GuiaHumana.jsx
// Organo soberano de guia humana
// Registra cada paso en Bitacora y Memoria, mostrando la secuencia en pantalla.

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function GuiaHumana() {
  const [pasos, setPasos] = useState([]);

  const guiar = (accion) => {
    const nuevoPaso = {
      tipo: "guia_humana",
      accion,
      fecha: new Date().toISOString(),
      origen: "GuiaHumana",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setPasos([...pasos, nuevoPaso]);

    registrarActo("guia_humana", nuevoPaso);
    registrar_en_memoria("guia_humana", nuevoPaso);

    console.log("[GuiaHumana]", nuevoPaso);
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#0f0",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0f0",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Guia Humana</h3>
      <button onClick={() => guiar("Estas en la pagina contaminada, dale clic en el boton azul.")}>
        Registrar paso
      </button>
      <pre>{JSON.stringify(pasos, null, 2)}</pre>
    </div>
  );
}
