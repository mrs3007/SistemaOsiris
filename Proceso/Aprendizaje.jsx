// SistemaOsiris/Proceso/Aprendizaje.jsx
// Organo soberano de Aprendizaje
// Registra aprendizajes en Bitacora y Memoria, y los proyecta en el altar

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

const Aprendizaje = ({ evento }) => {
  const [historial, setHistorial] = useState([]);

  const registrarAprendizaje = (nuevo) => {
    const registro = {
      tipo: "aprendizaje",
      detalle: nuevo,
      fecha: new Date().toISOString(),
      origen: "Aprendizaje",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setHistorial([...historial, registro]);

    registrarActo("aprendizaje", registro);
    registrar_en_memoria("aprendizaje", registro);

    console.log("[Aprendizaje]", registro);
  };

  return (
    <div className="aprendizaje" style={{ background: "#111", color: "#0f0", padding: "1em", borderRadius: "8px" }}>
      <button onClick={() => registrarAprendizaje(evento)}>
        📚 Registrar aprendizaje
      </button>
      <pre style={{ marginTop: "1em" }}>{JSON.stringify(historial, null, 2)}</pre>
    </div>
  );
};

export default Aprendizaje;
