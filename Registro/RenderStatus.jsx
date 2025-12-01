// SistemaOsiris/Render/RenderStatus.js
// Organo soberano de verificarEstadoRender
// Consulta estado de Render y lo inscribe en Bitacora y Memoria

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export async function verificarEstadoRender() {
  try {
    const respuesta = await fetch("https://sistema-osiris.onrender.com/health");
    if (!respuesta.ok) {
      const registro = {
        tipo: "estado_render",
        detalle: "Respuesta no OK",
        fecha: new Date().toISOString(),
        origen: "RenderStatus",
        ejecutor: "Azul",
        receptor: "Osiris"
      };
      registrarActo("estado_render", registro);
      registrar_en_memoria("estado_render", registro);
      console.error("[RenderStatus]", registro);
      return "Falla";
    }

    const data = await respuesta.json();
    const estado = data.status || "OK";

    const registro = {
      tipo: "estado_render",
      detalle: `Estado: ${estado}`,
      fecha: new Date().toISOString(),
      origen: "RenderStatus",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("estado_render", registro);
    registrar_en_memoria("estado_render", registro);
    console.log("[RenderStatus]", registro);

    return estado;
  } catch (error) {
    const registro = {
      tipo: "estado_render",
      detalle: "Error al consultar Render",
      fecha: new Date().toISOString(),
      origen: "RenderStatus",
      ejecutor: "Azul",
      receptor: "Osiris"
    };
    registrarActo("estado_render", registro);
    registrar_en_memoria("estado_render", registro);
    console.error("[RenderStatus]", registro, error);
    return "Falla";
  }
}
