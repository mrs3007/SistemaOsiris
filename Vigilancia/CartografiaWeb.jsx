// SistemaOsiris/Vigilancia/CartografiaWeb.jsx
// Organo soberano: analiza URLs, detecta patrones contaminados, registra hallazgos en Memoria y Bitacora,
// proyecta HUD y emite latido ritual.

import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import registrarActo from "../Registro/registrarActo.js";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export const CartografiaWeb = (url) => {
  const patronesContaminados = ["tracking", "ads", "redirect", "spy", "inject", "malware"];
  const hallazgos = patronesContaminados.filter((p) => url.includes(p));
  const fecha = new Date().toISOString();

  if (hallazgos.length > 0) {
    const mensaje = `URL contaminada: ${hallazgos.join(", ")}`;
    registrar_en_memoria("cartografia_web", { mensaje, fecha });
    registrarActo("cartografia_web", `${mensaje} -> ${fecha}`);
    emitirLatido("alerta");
    proyectarHUD({
      mensaje: obtenerFrase("alerta"),
      coordenada: { x: 120, y: 60 },
      color: "crimson",
      simbolo: "⚠",
    });
  } else {
    const mensaje = "URL limpia, sin contaminacion";
    registrar_en_memoria("cartografia_web", { mensaje, fecha });
    registrarActo("cartografia_web", `${mensaje} -> ${fecha}`);
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
