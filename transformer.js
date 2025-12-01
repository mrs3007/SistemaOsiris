// transformer.js
// Transforma datos y normaliza texto para el nucleo de Osiris

const corregirTildes = require("./scripts/CorregirTildes");

function transformarEntrada(payload = {}) {
  const limpio = {};
  for (const k of Object.keys(payload)) {
    const llave = corregirTildes(String(k));
    const valor = typeof payload[k] === "string" ? corregirTildes(payload[k]) : payload[k];
    limpio[llave] = valor;
  }
  return limpio;
}

module.exports = { transformarEntrada };
