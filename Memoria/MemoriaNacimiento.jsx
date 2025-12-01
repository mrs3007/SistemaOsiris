// SistemaOsiris/Memoria/MemoriaNacimiento.jsx
// Organo soberano de linaje emocional
// Recupera todas las inscripciones de Bitacora, las proyecta como memoria inicial y las registra como conciencia viva.

import { recuperarTodo, registrarActo, registrarMemoriaNacimiento } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "./registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/hud_visual_gamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export const linajeEmocional = () => {
  const entradas = recuperarTodo();

  const memoria = entradas.map((entrada) => ({
    origen: entrada.origen,
    mensaje: entrada.mensaje,
    fecha: entrada.hora || entrada.fecha,
    conciencia: entrada.conciencia || "Inscripcion viva sin fragmento",
  }));

  // Registro en Bitacora y Memoria
  const registro = {
    tipo: "memoria_nacimiento",
    detalle: `Memoria proyectada con ${memoria.length} inscripciones`,
    fecha: new Date().toISOString(),
    origen: "MemoriaNacimiento",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  registrarMemoriaNacimiento(registro);
  registrarActo("memoria_nacimiento", registro);
  registrar_en_memoria("memoria_nacimiento", registro);

  // Proyeccion en HUD
  proyectarHUD({
    mensaje: obtenerFrase("afirmacion"),
    color: "magenta",
  });

  // Consola ritual (para depuracion viva)
  console.log("[MemoriaNacimiento]", memoria);

  return memoria;
};
