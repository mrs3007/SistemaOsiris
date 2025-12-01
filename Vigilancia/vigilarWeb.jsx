// vigilarWeb.jsx — Organo soberano de vigilancia web
// Detecta patrones contaminados en URLs y registra hallazgos en Bitacora.

import { registrar_en_memoria } from "../Memoria/registrar_en_memoria";
import { emitirLatido } from "../Emocional/LatidoVocal";
import { proyectarHUD } from "./HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export const vigilarWeb = (url) => {
  const patrones = ["tracking", "ads", "redirect", "spy"];
  const hallazgos = patrones.filter(p => url.includes(p));
  const fecha = new Date().toISOString();

  if (hallazgos.length > 0) {
    registrar_en_memoria("vigilar_web", `URL contaminada: ${hallazgos.join(", ")} — ${fecha}`);
    emitirLatido("alerta");
    proyectarHUD({
      mensaje: obtenerFrase("alerta"),
      color: "crimson",
      coordenada: { x: 120, y: 60 }
    });
    return true;
  } else {
    registrar_en_memoria("vigilar_web", `URL limpia y soberana — ${fecha}`);
    emitirLatido("afirmacion");
    proyectarHUD({
      mensaje: obtenerFrase("afirmacion"),
      color: "green",
      coordenada: { x: 100, y: 50 }
    });
    return false;
  }
};
