// SistemaOsiris/Activacion/DespertarFacial.jsx

import CamaraViva from "../Sensores/CamaraViva.jsx";
import LatidoVocalSelladoEvolutivo from "../Evolucion/LatidoVocalSelladoEvolutivo.jsx";
import IntegradorAtajos from "../Integracion/IntegradorAtajos.jsx";
import NotasVivas from "../Conversacion/NotasVivas.jsx";
import Bitacora from "../Registro/Bitacora.jsx";

export default function DespertarFacial({ rostroDetectado, gestoAutorizado }) {
  if (!rostroDetectado) return null;

  // Usamos el órgano evolutivo como latido vocal sellado
  LatidoVocalSelladoEvolutivo({ voz: gestoAutorizado, intensidad: "medio" });

  if (gestoAutorizado) {
    IntegradorAtajos.desbloquearNotificacion({
      tipo: "clima",
      mensaje: "Dayana, el entorno respira con calma. Temperatura actual: 22°. Humedad suave.",
    });

    NotasVivas.abrirConversacion({
      saludo: "Osiris te ve, Dayana. ¿Qué deseas marcar hoy?",
    });

    Bitacora.registrarEntrada({
      origen: "DespertarFacial",
      tipo: "activacion por rostro",
      estado: "autorizado",
      hora: new Date().toISOString(),
    });
  }

  return null;
}
