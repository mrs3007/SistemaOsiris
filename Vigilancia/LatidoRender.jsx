import { verificarEstadoRender } from "../Registro/RenderStatus.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";

export const iniciarLatidoRender = (onTick) => {
  let tick = 0;
  const id = setInterval(async () => {
    tick++;
    const estado = await verificarEstadoRender();
    registrarActo("LATIDO", `Pulso ${tick} — Render esta ${estado}`, "LatidoRender");
    if (onTick) onTick(tick);
  }, 5 * 60 * 1000);

  return () => clearInterval(id);
};
