// SistemaOsiris/scripts/registrar_nucleo.js
// Script soberano: registra actos del nucleo en bitacora_osiris.json

const fs = require("fs");
const path = require("path");

const BITACORA_PATH = path.join(__dirname, "../database/bitacora_osiris.json");

function registrarNucleo(acto, detalle) {
  const registro = {
    fecha: new Date().toISOString(),
    acto,
    detalle
  };

  let bitacora = [];
  if (fs.existsSync(BITACORA_PATH)) {
    const contenido = fs.readFileSync(BITACORA_PATH, "utf8");
    try {
      bitacora = JSON.parse(contenido);
    } catch {
      bitacora = [];
    }
  }

  bitacora.push(registro);
  fs.writeFileSync(BITACORA_PATH, JSON.stringify(bitacora, null, 2), "utf8");

  return registro;
}

module.exports = registrarNucleo;
