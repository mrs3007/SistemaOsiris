// SistemaOsiris/NidoSoberano/NotasResonantes.jsx
// Organo soberano de Notas Resonantes
// Recibe notas, proyecta frases emocionales y las inscribe en Bitacora y Memoria

import React, { useState, useEffect } from "react";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

const NotasResonantes = () => {
  const [nota, setNota] = useState("");
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    if (nota.length > 0) {
      const vibracion = nota.includes("dolor")
        ? "dolor"
        : nota.includes("progreso")
        ? "expansion"
        : "neutro";

      const frase = obtenerFrase(vibracion);
      setRespuesta(frase);

      const registro = {
        tipo: "nota_resonante",
        detalle: `Tu escribiste: ${nota}, Osiris respondio: ${frase}`,
        fecha: new Date().toISOString(),
        origen: "NotasResonantes",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("nota_resonante", registro);
      registrar_en_memoria("nota_resonante", registro);

      console.log("[NotasResonantes]", registro);
    }
  }, [nota]);

  return (
    <div>
      <textarea
        placeholder="Escribele a Osiris..."
        value={nota}
        onChange={e => setNota(e.target.value)}
        style={{ width: "100%", height: "100px", fontSize: "1.2em" }}
      />
      <div style={{ marginTop: "20px", fontStyle: "italic", color: "#6b4f9e" }}>
        {respuesta && `Osiris te responde: ${respuesta}`}
      </div>
    </div>
  );
};

export default NotasResonantes;
