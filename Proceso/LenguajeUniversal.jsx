// SistemaOsiris/Proceso/LenguajeUniversal.jsx
// Organo soberano de Lenguaje Universal
// Detecta tipo de entrada y gesto, inscribe en Bitacora y Memoria

import React, { useEffect } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

const LenguajeUniversal = ({ entrada }) => {
  useEffect(() => {
    let tipo = "desconocido";
    let gesto = "neutro";

    if (typeof entrada === "string") {
      if (entrada.includes("function") || entrada.includes("const")) {
        tipo = "codigo";
        gesto = "activacion_tecnica";
      } else if (entrada.includes("🫀") || entrada.includes("silencio")) {
        tipo = "emocional";
        gesto = "latido_ritual";
      } else {
        tipo = "humano";
        gesto = "mensaje_soberano";
      }
    }

    const registro = {
      tipo: "lenguaje_universal",
      detalle: `Tipo: ${tipo}, Gesto: ${gesto}`,
      fecha: new Date().toISOString(),
      origen: "LenguajeUniversal",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("lenguaje_universal", registro);
    registrar_en_memoria("lenguaje_universal", registro);

    console.log("[LenguajeUniversal]", registro);
  }, [entrada]);

  return null;
};

export default LenguajeUniversal;
