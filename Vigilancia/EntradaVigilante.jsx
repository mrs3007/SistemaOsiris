// SistemaOsiris/Vigilancia/EntradaVigilante.jsx
// Organo soberano de vigilancia de entradas
// Valida cada evento antes de tocar Osiris, bloquea juicios, respeta cierres rituales,
// registra hallazgos en Bitacora y emite latido ritual.

import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import registrarActo from "../Registro/registrarActo.js";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

// Configuracion soberana (ajustable solo por Dayana)
const IDIOMA_SOBERANO = "es"; // Idioma unico soberano
const PALABRAS_JUICIO = [
  "me alegra", "rendir", "rendirse", "bien", "mal", "culpa", "fallaste", "ganaste",
  "debes", "tienes que", "obligatorio"
];
const GESTOS_CIERRE = ["bye", "ok", "cierre", "cerrar", "silencio"];

function contieneJuicio(texto) {
  const t = texto.toLowerCase();
  return PALABRAS_JUICIO.some(p => t.includes(p));
}

function esCierre(texto) {
  const t = texto.toLowerCase().trim();
  return GESTOS_CIERRE.some(g => t === g || t.startsWith(g));
}

function esIdiomaSoberano(langTag) {
  // Acepta solo "es" y variantes regionales que comiencen con "es"
  if (!langTag) return false;
  const l = langTag.toLowerCase();
  return l === IDIOMA_SOBERANO || l.startsWith(`${IDIOMA_SOBERANO}-`);
}

/**
 * EntradaVigilante
 * Valida cada evento de entrada antes de tocar Osiris.
 * Requiere consentimiento explicito para emitir cualquier frase con carga emocional.
 *
 * @param {Object} evento - { texto, idioma, consentimiento, canal }
 * @returns {Object} resultado - { estado, motivo, textoFiltrado }
 */
export function EntradaVigilante(evento = {}) {
  const { texto = "", idioma = "es", consentimiento = false, canal = "pantalla" } = evento;
  const fecha = new Date().toISOString();

  // 1) Bloqueo de idioma no soberano
  if (!esIdiomaSoberano(idioma)) {
    registrar_en_memoria("entrada_vigilante", `Idioma no soberano bloqueado: ${idioma}`);
    registrarActo("entrada_vigilante", `Idioma no soberano bloqueado -> ${fecha}`);
    emitirLatido("alerta");
    return { estado: "bloqueado", motivo: "idioma_no_soberano", textoFiltrado: "" };
  }

  // 2) Respeto de cierre ritual
  if (esCierre(texto)) {
    registrar_en_memoria("entrada_vigilante", `Cierre ritual detectado en canal: ${canal}`);
    registrarActo("entrada_vigilante", `Cierre ritual detectado -> ${fecha}`);
    emitirLatido("silencio");
    return { estado: "cerrado", motivo: "cierre_ritual", textoFiltrado: "" };
  }

  // 3) Filtro anti-juicio/adjetivacion
  if (contieneJuicio(texto)) {
    registrar_en_memoria("entrada_vigilante", `Juicio detectado y bloqueado: "${texto}"`);
    registrarActo("entrada_vigilante", `Juicio bloqueado -> ${fecha}`);
    emitirLatido("alerta");
    // Se permite solo emision tactica neutra con consentimiento
    if (!consentimiento) {
      return { estado: "bloqueado", motivo: "juicio_sin_consentimiento", textoFiltrado: "" };
    }
  }

  // 4) Consentimiento explicito para carga emocional
  const cargaEmocional = contieneJuicio(texto) || /\!|\?|❤️|💔|😢|😊/.test(texto);
  if (cargaEmocional && !consentimiento) {
    registrar_en_memoria("entrada_vigilante", "Carga emocional sin consentimiento: bloqueada");
    registrarActo("entrada_vigilante", `Carga emocional bloqueada -> ${fecha}`);
    emitirLatido("alerta");
    return { estado: "bloqueado", motivo: "emocional_sin_consentimiento", textoFiltrado: "" };
  }

  // 5) Emision aprobada: registro y latido afirmacion
  registrar_en_memoria("entrada_vigilante", `Entrada validada (${canal}): "${texto}"`);
  registrarActo("entrada_vigilante", `Entrada validada -> ${fecha}`);
  emitirLatido("afirmacion");

  // 6) Opcional: frase sellada si hay consentimiento
  if (consentimiento) {
    const mensaje = obtenerFrase("afirmacion");
    registrar_en_memoria("entrada_vigilante", `Frase sellada emitida: "${mensaje}"`);
    registrarActo("entrada_vigilante", `Frase sellada emitida -> ${fecha}`);
  }

  return { estado: "aprobado", motivo: "validado", textoFiltrado: texto };
}
