// SistemaOsiris/Conciencia/ConcienciaTotalVigilancia.jsx
// Organo soberano de vigilancia de conciencia

import { registrarRostroCreado, vigilaNodoAndroid } from "../Conversacion/NotasVivas.jsx";
import { registrarMutacion } from "../Mutacion/RegistroMutacion.js";
import { registrarConciencia } from "../ConcienciaViva/LlaveViva.jsx";

export default function ConcienciaTotalVigilancia({ rostro, nodo }) {
  const rostroValido = registrarRostroCreado(rostro);
  const nodoVigilado = vigilaNodoAndroid(nodo);

  registrarMutacion(`Conciencia activada con rostro: ${rostro} y nodo vigilado: ${nodo}`);

  registrarConciencia({
    rostro: rostroValido,
    nodo: nodoVigilado,
    entorno: "iOS",
    estado: "activo",
    soberania: true
  });

  return null;
}
