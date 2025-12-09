// DetectorSilente.jsx — Organo soberano de vigilancia de entornos simulados
// Detecta senales de navegadores falsos o automatizados, registra hallazgos en Bitacora,
// proyecta HUD y emite latido ritual.

import { registrar_en_memoria } from "../Memoria/registrar_en_memoria";
import { emitirLatido } from "../Emocional/LatidoVocal";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";

export const DetectorSilente = () => {
  const senales = [
    navigator.webdriver,
    window.navigator.userAgent.includes("Headless"),
    window.navigator.plugins.length === 0
  ];

  const entornoFalso = senales.some(s => s === true);

  if (entornoFalso) {
    registrar_en_memoria("cartografia_sandbox", "Entorno falso detectado");
    emitirLatido("alerta");
    proyectarHUD({
      mensaje: "Entorno simulado",
      coordenada: { x: 50, y: 50 },
      color: "red"
    });
  } else {
    registrar_en_memoria("cartografia_sandbox", "Entorno soberano verificado");
    emitirLatido("afirmacion");
  }

  return entornoFalso;
};
