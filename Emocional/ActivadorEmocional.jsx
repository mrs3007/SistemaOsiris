//SistemaOsiris/Emocional/ActivadorEmocional.jsx

import frases from "./frases_rituales.json";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function ActivadorEmocional({ gesto }) {
  const frase = frases[gesto] || frases["default"];

  const nota = {
    tipo: "activacion_emocional",
    gesto,
    frase,
    fecha: new Date().toISOString(),
    origen: "ActivadorEmocional",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  // Registro en Bitacora
  registrarActo("activacion_emocional", nota);

  // Registro en Memoria
  registrar_en_memoria("activacion_emocional", nota);

  console.log("[ActivadorEmocional]", nota);

  return (
    <div className="latido-emocional">
      <p>{frase}</p>
    </div>
  );
}
