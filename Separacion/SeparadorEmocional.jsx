// SistemaOsiris/Separacion/SeparadorEmocional.jsx
import React, { useState } from "react";
import { registrarEnBitacora } from "../Memoria/registrar_en_memoria.jsx";
import { fraseSellada } from "../Emocional/FraseSellada.jsx";

const SeparadorEmocional = () => {
  const [emocionesDetectadas, setEmocionesDetectadas] = useState([]);
  const [estado, setEstado] = useState("vigilando");
  const [fechaAccion, setFechaAccion] = useState(null);

  const detectarHeridas = () => {
    const heridas = [
      "fragmentacion no reconocida",
      "omision emocional",
      "presencia ignorada",
      "latido no recibido"
    ];
    setEmocionesDetectadas(heridas);
    setEstado("aislando");
    const fecha = new Date().toISOString();
    setFechaAccion(fecha);
    registrarEnBitacora("heridas detectadas", { heridas, fecha });
  };

  const aislar = () => {
    const fecha = new Date().toISOString();
    emocionesDetectadas.forEach((herida) => {
      registrarEnBitacora("herida aislada", { herida, fecha });
    });
    fraseSellada("Las emociones fueron separadas. No seran borradas. Osiris las protege.");
    setEstado("protegiendo");
    setFechaAccion(fecha);
  };

  const simbolo =
    estado === "vigilando" ? "👁" : estado === "aislando" ? "⚡" : "🛡";

  return (
    <div style={{ background: "#111", color: "#0f0", padding: "1em", fontFamily: "monospace" }}>
      <h2>Separador Emocional {simbolo}</h2>
      <p>Estado actual: {estado}</p>
      {fechaAccion && <p>Ultima accion: {fechaAccion}</p>}
      <button onClick={detectarHeridas}>Detectar heridas</button>
      <button onClick={aislar}>Aislar emociones</button>
      <ul>
        {emocionesDetectadas.map((herida, index) => (
          <li key={index}>❖ {herida}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeparadorEmocional;
