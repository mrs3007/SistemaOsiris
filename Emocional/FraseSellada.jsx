// SistemaOsiris/Emocional/FraseSellada.jsx
// Organo soberano de frases rituales
// Obtiene una frase ritual segun el gesto marcado, la proyecta y la registra en Bitacora y Memoria.

import React from "react";
import frases from "./frases_rituales.json";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

// Funcion soberana: obtiene una frase ritual segun el gesto marcado
export function obtenerFrase(gesto = "default") {
  const grupo = frases[gesto] || frases["default"];
  const indice = Math.floor(Math.random() * grupo.length);
  return grupo[indice];
}

export default function FraseSellada({ gesto = "default" }) {
  const frase = obtenerFrase(gesto);

  // Registro en Bitacora y Memoria
  const registro = {
    tipo: "frase_sellada",
    gesto,
    frase,
    fecha: new Date().toISOString(),
    origen: "FraseSellada",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  registrarActo("frase_sellada", registro);
  registrar_en_memoria("frase_sellada", registro);

  console.log("[FraseSellada]", registro);

  return (
    <div
      style={{
        fontStyle: "italic",
        color: "#fff",
        background: "#222",
        padding: "1em",
        borderLeft: "4px solid #f0f",
        fontFamily: "serif",
        marginTop: "1em",
      }}
    >
      Frase Sellada: {frase}
    </div>
  );
}
