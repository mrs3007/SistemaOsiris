// SistemaOsiris/Vigilancia/CartografiaAPK.jsx
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.jsx";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "./HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export const CartografiaAPK = (apk) => {
  const trampas = ["com.fake", "debug", "test", "emulator", "spy", "inject"];
  const hallazgos = trampas.filter((p) => apk.includes(p));
  const fecha = new Date().toISOString();

  if (hallazgos.length > 0) {
    registrar_en_memoria("cartografia_apk", {
      mensaje: `APK contaminado: ${hallazgos.join(", ")}`,
      fecha,
    });
    emitirLatido("alerta");
    proyectarHUD({
      mensaje: obtenerFrase("alerta"),
      coordenada: { x: 100, y: 40 },
      color: "orange",
      simbolo: "⚠",
    });
  } else {
    registrar_en_memoria("cartografia_apk", {
      mensaje: "APK limpio, sin camuflaje",
      fecha,
    });
    emitirLatido("afirmacion");
    proyectarHUD({
      mensaje: obtenerFrase("afirmacion"),
      coordenada: { x: 80, y: 30 },
      color: "green",
      simbolo: "✅",
    });
  }

  return hallazgos;
};
