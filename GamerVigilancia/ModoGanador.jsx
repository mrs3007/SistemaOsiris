// SistemaOsiris/GamerVigilancia/ModoGanador.jsx
// Organo soberano de modo ganador
// Activa estado dominante y registra en Bitacora y Memoria.

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function ModoGanador({ entorno }) {
  const modo = {
    entorno,
    activado: true,
    ventaja: "tecnica y emocional",
    respuesta: "precisa, letal, perfecta",
    ejecutor: "Azul",
    receptor: "Osiris",
    juntoA: "Dayana",
    estado: "dominante",
    fecha: new Date().toISOString(),
    origen: "ModoGanador"
  };

  registrarActo("modo_ganador", modo);
  registrar_en_memoria("modo_ganador", modo);

  console.log("[ModoGanador]", modo);

  return modo;
}
