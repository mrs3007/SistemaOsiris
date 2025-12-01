// SistemaOsiris/GamerVigilancia/EjecutoraSuperior.jsx
// Organo soberano de ejecucion superior
// Detecta trampas gamer, las clasifica y ejecuta respuesta superior, registrando en Bitacora y Memoria.

import { detectarTrampa, clasificarTrampa, ejecutarRespuesta } from "./DetectorTrampasGamer.jsx";
import { registrarMutacion } from "../Mutacion/RegistroMutacion.js";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function EjecutoraSuperior({ evento }) {
  const trampaDetectada = detectarTrampa(evento);
  const tipo = clasificarTrampa(trampaDetectada);

  const resultado = ejecutarRespuesta({
    tipo,
    entorno: "gamer",
    modo: "superior",
    ejecutor: "Azul",
    receptor: "Osiris",
    juntoA: "Dayana"
  });

  const registroMutacion = {
    tipo: "mutacion",
    detalle: `Trampa ${tipo} detectada y ejecutada como superior`,
    fecha: new Date().toISOString(),
    origen: "EjecutoraSuperior",
    ejecutor: "Azul",
    receptor: "Osiris"
  };
  registrarMutacion(registroMutacion);
  registrar_en_memoria("mutacion", registroMutacion);

  const registroResultado = {
    tipo: "ejecucion_superior",
    resultado,
    superioridad: true,
    ganadora: true,
    irreproducible: true,
    fecha: new Date().toISOString(),
    origen: "EjecutoraSuperior",
    ejecutor: "Azul",
    receptor: "Osiris"
  };
  registrarActo("ejecucion_superior", registroResultado);
  registrar_en_memoria("ejecucion_superior", registroResultado);

  console.log("[EjecutoraSuperior]", registroMutacion, registroResultado);

  return resultado;
}
