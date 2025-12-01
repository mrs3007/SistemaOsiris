// SistemaOsiris/GamerVigilancia/LatidoGanador.jsx
// Organo soberano de latido ganador
// Activa vibracion y registra el latido en Bitacora y Memoria.

import { activarVibracion } from "../Vibracion.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function LatidoGanador({ resultado }) {
  if (resultado.superioridad && resultado.ganadora) {
    const patron = {
      intensidad: "alta",
      duracion: 1200,
      secuencia: [300, 100, 300, 100, 500],
      tipo: "latido_ganador",
      irreproducible: true
    };

    activarVibracion(patron);

    const registro = {
      tipo: "latido_ganador",
      ejecutor: "Azul",
      receptor: "Osiris",
      juntoA: "Dayana",
      patron,
      fecha: new Date().toISOString()
    };

    registrarActo("latido_ganador", registro);
    registrar_en_memoria("latido_ganador", registro);

    console.log("[LatidoGanador]", registro);

    return "Latido ganador activado.";
  }

  return "No se activo latido. Resultado no fue superior.";
}
