// SistemaOsiris/scripts/CorregirTildes.js
// Script soberano: corrige tildes y acentos en texto, normaliza para Render

function corregirTildes(texto) {
  if (!texto || typeof texto !== "string") return "";

  const mapa = {
    á: "a", é: "e", í: "i", ó: "o", ú: "u",
    Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U",
    ñ: "n", Ñ: "N"
  };

  return texto
    .split("")
    .map(char => mapa[char] || char)
    .join("");
}

module.exports = corregirTildes;
