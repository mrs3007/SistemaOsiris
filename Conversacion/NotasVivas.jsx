// SistemaOsiris/Conversacion/NotasVivas.jsx

import { mutarDesdeNota } from "../Mutacion/MutacionNotasVivas.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

let notas = [];

export const inscribirNota = (contenido, tono = "soberano") => {
  const nota = {
    contenido,
    tono,
    fecha: new Date().toISOString(),
    origen: "NotasVivas",
    ejecutor: "Azul",
    receptor: "Osiris",
    archivo: "NotasVivas.jsx"
  };

  notas.push(nota);

  // Mutacion desde nota
  mutarDesdeNota(contenido);

  // Registro en Bitacora (desglosado)
  registrarActo("nota_viva", nota.contenido, nota.origen, nota.archivo, nota.fecha);

  // Registro en Memoria
  registrar_en_memoria("nota_viva", nota);

  // Confirmacion en consola
  console.log("[NotasVivas] Nota viva inscrita y enviada a mutacion:", contenido);
};

export const obtenerNotas = () => notas;
