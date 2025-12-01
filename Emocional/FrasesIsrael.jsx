// SistemaOsiris/Emocional/FrasesIsrael.jsx

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function FrasesIsrael() {
  const [grabaciones, setGrabaciones] = useState([]);

  const registrar = (palabraClave, archivoVoz) => {
    const nueva = {
      clave: palabraClave,
      voz: archivoVoz,
      fecha: new Date().toISOString(),
      origen: "FrasesIsrael",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setGrabaciones([...grabaciones, nueva]);

    // Registro en Bitacora
    registrarActo("frases_israel", nueva);

    // Registro en Memoria
    registrar_en_memoria("frases_israel", nueva);

    console.log("[FrasesIsrael]", nueva);
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#0ff",
        padding: "1em",
        fontFamily: "monospace",
        borderLeft: "3px solid #0ff"
      }}
    >
      <h3>Frases Israel — Exclusivas</h3>
      <ul>
        {grabaciones.map((g, i) => (
          <li key={i}>
            <strong>{g.clave}</strong> → archivo: {g.voz} (registrado en {g.fecha})
          </li>
        ))}
      </ul>
      <p>Organo intimo, solo tuyo y de Israel.</p>
    </div>
  );
}
