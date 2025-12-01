// validator.js
// Valida entradas contra reglas soberanas y prepara errores legibles

const fs = require("fs");
const path = require("path");
const { transformarEntrada } = require("./transformer");
const corregirTildes = require("./scripts/CorregirTildes");

const RULES_PATH = path.join(__dirname, "data/rules.json");

function cargarReglas() {
  const raw = fs.readFileSync(RULES_PATH, "utf8");
  return JSON.parse(raw);
}

function validarPayload(payload) {
  const reglas = cargarReglas();
  const entrada = transformarEntrada(payload);
  const errores = [];

  if (reglas.validaciones.sinTildes) {
    for (const [k, v] of Object.entries(payload)) {
      if (typeof v === "string" && v !== corregirTildes(v)) {
        errores.push(`campo "${k}" contiene tildes o caracteres no permitidos`);
      }
    }
  }

  if (reglas.validaciones.expandido !== true) {
    errores.push("regla 'expandido' no esta activa");
  }

  return {
    ok: errores.length === 0,
    entrada,
    errores
  };
}

module.exports = { validarPayload };
