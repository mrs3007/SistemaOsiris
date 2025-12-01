// SistemaOsiris/Vigilancia/CartografiaWeb.jsx
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.jsx";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "./HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export const CartografiaWeb = (url) => {
  const patronesContaminados = ["tracking", "ads", "redirect", "spy", "inject", "malware"];
  const hallazgos = patronesContaminados.filter((p) => url.includes(p));
  const fecha = new Date().toISOString();

  if (hallazgos.length > 0) {
    registrar_en_memoria("cartografia_web", {
      mensaje: `URL contaminada: ${hallazgos.join(", ")}`,
      fecha,
    });
    emitirLatido("alerta");
    proyectarHUD({
      mensaje: obtenerFrase("alerta"),
      coordenada: { x: 120, y: 60 },
      color: "crimson",
      simbolo: "⚠",
    });
  } else {
    registrar_en_memoria("cartografia_web", {
      mensaje: "URL limpia, sin contaminacion",
      fecha,
    });
    emitirLatido("afirmacion");
    proyectarHUD({
      mensaje: obtenerFrase("afirmacion"),
      coordenada: { x: 100, y: 50 },
      color: "green",
      simbolo: "✅",
    });
  }

  return hallazgos;
};
