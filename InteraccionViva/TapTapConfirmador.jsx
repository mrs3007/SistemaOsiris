// SistemaOsiris/InteraccionViva/TapTapConfirmador.jsx
// Organo soberano de confirmacion tap tap
// Reconoce gesto, activa latido ganador total y registra en Bitacora y Memoria.

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import LatidoGanadorTotal from "../GamerVigilancia/LatidoGanadorTotal.jsx";
import HUD3 from "../Visual/HUD3.jsx";

export default function TapTapConfirmador({ gesto }) {
  if (gesto === "tap tap") {
    const confirmacion = {
      tipo: "confirmacion_soberana",
      ejecutor: "Dayana",
      activacion: "ejecucion_tecnica",
      modo: "irreproducible",
      fecha: new Date().toISOString(),
      origen: "TapTapConfirmador",
      receptor: "Osiris"
    };

    registrarActo("confirmacion_soberana", confirmacion);
    registrar_en_memoria("confirmacion_soberana", confirmacion);

    console.log("[TapTapConfirmador]", confirmacion);

    // Activar latido ganador total con resultado simulado
    LatidoGanadorTotal({ resultado: { superioridad: true, ganadora: true } });

    return (
      <HUD3 mensaje="Confirmacion recibida. Ejecucion activada. Latido proyectado." visible={true} />
    );
  }

  return (
    <HUD3 mensaje="Gesto no reconocido. Esperando tap tap." visible={true} />
  );
}
