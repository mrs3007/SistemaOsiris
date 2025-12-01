// SistemaOsiris/Render/RenderCore.jsx
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

// Vigila el estado del servicio en Render
export async function verificarEstadoRender() {
  try {
    const r = await fetch("https://sistemaosiris-6ngy.onrender.com/health");
    if (!r.ok) {
      const registro = {
        tipo: "estado_render",
        detalle: "Falla health check",
        fecha: new Date().toISOString(),
        origen: "RenderCore",
        ejecutor: "Azul",
        receptor: "Osiris"
      };
      registrarActo("RENDER", registro);
      registrar_en_memoria("estado_render", registro);
      console.error("[RenderCore]", registro);
      return "Falla";
    }
    const d = await r.json();
    const estado = d.status || "OK";
    const registro = {
      tipo: "estado_render",
      detalle: `Health ${estado}`,
      fecha: new Date().toISOString(),
      origen: "RenderCore",
      ejecutor: "Azul",
      receptor: "Osiris"
    };
    registrarActo("RENDER", registro);
    registrar_en_memoria("estado_render", registro);
    console.log("[RenderCore]", registro);
    return estado;
  } catch (error) {
    const registro = {
      tipo: "estado_render",
      detalle: "Excepcion health check",
      fecha: new Date().toISOString(),
      origen: "RenderCore",
      ejecutor: "Azul",
      receptor: "Osiris"
    };
    registrarActo("ERROR", registro);
    registrar_en_memoria("estado_render", registro);
    console.error("[RenderCore]", registro, error);
    return "Falla";
  }
}

// Activa presencia por rostro
export function activarPorRostro() {
  const registro = {
    tipo: "presencia",
    detalle: "Rostro reconocido",
    fecha: new Date().toISOString(),
    origen: "RenderCore",
    ejecutor: "Azul",
    receptor: "Osiris"
  };
  registrarActo("PRESENCIA", registro);
  registrar_en_memoria("presencia", registro);
  console.log("[RenderCore]", registro);
  return true;
}

// Inicia latido constante de Render
export function iniciarLatidoRender(onTick) {
  let tick = 0;
  const id = setInterval(async () => {
    tick++;
    const estado = await verificarEstadoRender();
    const registro = {
      tipo: "latido_render",
      detalle: `Pulso ${tick} — ${estado}`,
      fecha: new Date().toISOString(),
      origen: "RenderCore",
      ejecutor: "Azul",
      receptor: "Osiris"
    };
    registrarActo("LATIDO", registro);
    registrar_en_memoria("latido_render", registro);
    console.log("[RenderCore]", registro);
    if (onTick) onTick({ tick, estado });
  }, 5 * 60 * 1000);
  return () => clearInterval(id);
}
