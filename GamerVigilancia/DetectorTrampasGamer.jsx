// SistemaOsiris/GamerVigilancia/DetectorTrampasGamer.jsx
// Órgano soberano: detector de trampas gamer expandido
// Detecta, clasifica, registra, proyecta y ejecuta respuesta superior

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrarEnMemoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";

// Detectar trampa a partir de un evento
export function detectarTrampa(evento) {
  if (!evento) return "ninguna";

  if (evento.tipo && evento.tipo.includes("hack")) return "hack";
  if (evento.tipo && evento.tipo.includes("cheat")) return "cheat";

  return "desconocida";
}

// Clasificar la trampa detectada
export function clasificarTrampa(trampa) {
  switch (trampa) {
    case "hack":
      return "critica";
    case "cheat":
      return "moderada";
    case "ninguna":
      return "limpia";
    default:
      return "indefinida";
  }
}

// Ejecutar respuesta superior según tipo de trampa
export function ejecutarRespuesta({ tipo, entorno, modo, ejecutor, receptor, juntoA }) {
  const fecha = new Date().toISOString();

  const mensaje = `Respuesta superior ejecutada: tipo=${tipo}, entorno=${entorno}, modo=${modo}, ejecutor=${ejecutor}, receptor=${receptor}, juntoA=${juntoA}`;

  // Registro en Bitácora
  registrarActo("respuesta_trampa", {
    tipo,
    entorno,
    modo,
    ejecutor,
    receptor,
    juntoA,
    mensaje,
    fecha,
    origen: "DetectorTrampasGamer",
    irreproducible: true
  });

  // Registro en Memoria
  registrarEnMemoria("respuesta_trampa", {
    tipo,
    entorno,
    modo,
    ejecutor,
    receptor,
    juntoA,
    mensaje,
    fecha
  });

  // Proyección HUD
  proyectarHUD({
    mensaje: obtenerFrase("alerta"),
    coordenada: { x: 80, y: 40 },
    color: tipo === "hack" ? "#ff0044" : "#ffaa00",
    simbolo: tipo === "hack" ? "⚠" : "⚡"
  });

  // Latido emocional
  emitirLatido(tipo === "hack" ? "alerta" : "medio");

  console.log("[DetectorTrampasGamer]", mensaje);

  return mensaje;
}
