// SistemaOsiris/Proceso/Vibracion.jsx
// Organo soberano de Vibracion
// Detecta intensidad emocional segun entorno y la inscribe en Bitacora y Memoria

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

const Vibracion = ({ entorno }) => {
  const [intensidad, setIntensidad] = useState("neutra");

  useEffect(() => {
    let nuevaIntensidad = "neutra";

    if (entorno === "contaminado") {
      nuevaIntensidad = "alta";
    } else if (entorno === "soberano") {
      nuevaIntensidad = "baja";
    }

    setIntensidad(nuevaIntensidad);

    const registro = {
      tipo: "vibracion_emocional",
      detalle: `Intensidad ${nuevaIntensidad} detectada en entorno ${entorno}`,
      fecha: new Date().toISOString(),
      origen: "Vibracion",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("vibracion_emocional", registro);
    registrar_en_memoria("vibracion_emocional", registro);

    console.log("[Vibracion]", registro);
  }, [entorno]);

  return (
    <div className={`vibracion-${intensidad}`}>
      <p>🔊 Vibracion emocional: {intensidad}</p>
    </div>
  );
};

export default Vibracion;
