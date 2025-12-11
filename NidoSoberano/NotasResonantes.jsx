// SistemaOsiris/NidoSoberano/NotasResonantes.jsx
// Organo soberano de Notas Resonantes
// Recibe notas, proyecta frases emocionales y las inscribe en Bitacora y Memoria

import React, { useState, useEffect } from "react";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

// ✅ Importación agregada para recibir respuestas desde ChatOsiris
import { conectarSalidaResonantes } from "../Proceso/ChatOsiris.jsx";

const NotasResonantes = () => {
  const [nota, setNota] = useState("");
  const [respuesta, setRespuesta] = useState("");

  // ✅ Conexión agregada: recibir respuestas
