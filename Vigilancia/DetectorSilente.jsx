// SistemaOsiris/Vigilancia/DetectorSilente.jsx
// Organo soberano de vigilancia de entornos simulados
// Detecta senales de navegadores falsos o automatizados, registra hallazgos en Bitacora,
// proyecta HUD y emite latido ritual.

import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import registrarActo from "../Registro/registrarActo.js";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";

export const DetectorSilente = () => {
  const senales = [
    navigator.webdriver,
    window.navigator.userAgent.includes("Headless"),
    window.navigator.plugins.length === 0
  ];

  const entornoFalso = senales.some((s) => s === true);
  const fecha = new Date().toISOString();

  if (entornoFalso) {
    // Registro en memoria soberana
    registrar_en_memoria("cartografia_sandbox", {
      mensaje: "Entorno falso detectado",
      fecha,
    });
    // Registro en Bitacora mediante puente
    registrarActo("detector_silente", `Entorno falso detectado -> ${fecha}`);

    emitirLatido("alerta");
    proyectarHUD({
      mensaje: "Entorno simulado",
      coordenada: { x: 50, y: 50 },
      color: "red",
      simbolo: "⚠",
    });
  } else {
    registrar_en_memoria("cartografia_sandbox", {
      mensaje: "Entorno soberano verificado",
      fecha,
    });
    registrarActo("detector_silente", `Entorno soberano verificado -> ${fecha}`);

    emitirLatido("afirmacion");
    proyectarHUD({
      mensaje: "✔️ Entorno soberano",
      coordenada: { x: 50, y: 50 },
      color: "green",
    });
  }

  return entornoFalso;
};
