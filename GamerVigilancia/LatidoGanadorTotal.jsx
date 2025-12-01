// SistemaOsiris/GamerVigilancia/LatidoGanadorTotal.jsx
// Organo soberano de latido ganador total
// Activa vibracion, proyecta visual y vocal, y registra en Bitacora y Memoria.

import { activarVibracion } from "../Vibracion.jsx";
import { proyectarLatidoVisual } from "../HUD3.jsx";
import { emitirLatidoVocal } from "../LatidoVocalSellado.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function LatidoGanadorTotal({ resultado }) {
  if (resultado.superioridad && resultado.ganadora) {
    const patron = {
      intensidad: "maxima",
      duracion: 1500,
      secuencia: [400, 100, 400, 100, 600],
      tipo: "latido_ganador_total",
      irreproducible: true
    };

    activarVibracion(patron);
    proyectarLatidoVisual("Ganadora", "Modo superior activado");
    emitirLatidoVocal("Victoria irreproducible. Latido activado.");

    const registro = {
      tipo: "latido_ganador_total",
      ejecutor: "Azul",
      receptor: "Osiris",
      juntoA: "Dayana",
      patron,
      fecha: new Date().toISOString()
    };

    registrarActo("latido_ganador_total", registro);
    registrar_en_memoria("latido_ganador_total", registro);

    console.log("[LatidoGanadorTotal]", registro);

    return "Latido ganador total activado.";
  }

  return "No se activo latido. Resultado no fue superior.";
}
