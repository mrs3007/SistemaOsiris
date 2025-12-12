// Vigilancia/DetectorCamuflajeGamer.js
// Órgano soberano: Detector de camuflaje visual para MotorSoberano
// Clasifica elementos como: soberano, neutral o contaminado

export function detectar_camuflaje(layout = {}) {
  const resultado = {};

  const patrones = [
    /sandbox/i,
    /debug/i,
    /emulator/i,
    /fake/i,
    /clone/i,
    /pirate/i,
    /hidden/i,
    /stealth/i,
    /ghost/i,
    /knox/i,
    /container/i,
    /virtual/i
  ];

  Object.entries(layout).forEach(([id, valor]) => {
    const texto = String(valor).toLowerCase();

    let contaminado = patrones.some((patron) => patron.test(texto));

    if (contaminado) {
      resultado[id] = "contaminado";
    } else if (texto.trim() !== "") {
      resultado[id] = "neutral";
    } else {
      resultado[id] = "soberano";
    }
  });

  return resultado;
}
