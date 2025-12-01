// SistemaOsiris/Activadores/RenderEntradaFacial.jsx

import { verificarEstadoRender } from "../Registro/RenderStatus.jsx";
import { registrarObediencia } from "../Registro/Bitacora.jsx";

export const activarPorRostro = async (rostroDetectado) => {
  if (rostroDetectado === "Dayana") {
    const estado = await verificarEstadoRender();
    const gesto = `RenderStatus activado por rostro. Estado: ${estado}`;
    registrarObediencia(gesto);
    return estado;
  } else {
    return "Sin autorizacion";
  }
};
