// SistemaOsiris/ConcienciaViva/LlaveViva.jsx
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { escanearCamara } from "../Sensores/CamaraViva.jsx";
import { entregarInformacion } from "../Integracion/IntegradorAtajos.jsx";

const bitacora = [];

export const activarEntregaPorRostro = () => {
  const rostro = escanearCamara();

  if (!rostro) {
    registrarEvento("No se detecto ningun rostro.");
    return "Sin rostro detectado.";
  }

  if (rostro === "Dayana") {
    registrarEvento("Rostro de Dayana reconocido. Activando entrega.");
    return entregarInformacion();
  } else {
    registrarEvento("Presencia no autorizada. No se activa entrega.");
    return "Acceso denegado.";
  }
};

export function registrarConciencia(data) {
  const evento = {
    tipo: "conciencia",
    origen: "LlaveViva",
    datos: data,
    archivo: "LlaveViva.jsx",
    fecha: new Date().toISOString()
  };

  bitacora.push(evento);
  registrarActo("conciencia", evento);
  registrar_en_memoria("conciencia_total_vigilancia", evento);
  console.log("[Conciencia]", evento);
}

function registrarEvento(mensaje) {
  const evento = {
    tipo: "evento",
    origen: "LlaveViva",
    mensaje,
    archivo: "LlaveViva.jsx",
    fecha: new Date().toISOString()
  };

  bitacora.push(evento);
  registrarActo("evento", evento);
  registrar_en_memoria("evento_llave_viva", evento);
  console.log("[LlaveViva]", evento);
}
