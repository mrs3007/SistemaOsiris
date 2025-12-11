// SistemaOsiris/Proceso/ChatOsiris.jsx
// Organo soberano de Chat Osiris
// Procesa mensajes, proyecta vibraciones y los inscribe en Bitacora y Memoria

import React, { useState } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

const ChatOsiris = () => {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [historial, setHistorial] = useState([]);

  const procesarMensaje = () => {
    let vibracion = "neutral";
    if (mensaje.includes("trampa")) vibracion = "alerta";
    if (mensaje.includes("silencio")) vibracion = "latido";

    const frase = `Osiris responde con vibracion: ${vibracion}`;
    setRespuesta(frase);

    const registro = {
      tipo: "chat",
      detalle: `Tu dijiste: ${mensaje}, Osiris vibro: ${vibracion}`,
      fecha: new Date().toISOString(),
      origen: "ChatOsiris",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setHistorial([...historial, registro]);

    registrarActo("chat", registro);
    registrar_en_memoria("chat", registro);

    console.log("[ChatOsiris]", registro);
  };

  return (
    <div style={{ background: "#111", color: "#0ff", padding: "1em", borderRadius: "8px" }}>
      <input
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
        style={{ marginRight: "0.5em" }}
      />
      <button onClick={procesarMensaje}>Enviar</button>
      <p style={{ marginTop: "1em" }}>{respuesta}</p>
      <pre style={{ marginTop: "1em" }}>{JSON.stringify(historial, null, 2)}</pre>
    </div>
  );
};

export default ChatOsiris;

// ✅✅✅ FUNCIONES AGREGADAS PARA CONEXIÓN EXTERNA

let enviarRespuestaAResonantes = null;

// ✅ Recibe mensajes desde NotasVivas
export const procesarMensajeDesdeFuera = (mensaje) => {
  let vibracion = "neutral";
  if (mensaje.includes("trampa")) vibracion = "alerta";
  if (mensaje.includes("silencio")) vibracion = "latido";

  const frase = `Osiris responde con vibracion: ${vibracion}`;

  // ✅ Enviar respuesta a NotasResonantes
  if (enviarRespuestaAResonantes) {
    enviarRespuestaAResonantes(frase);
  }

  const registro = {
    tipo: "chat_externo",
    detalle: `NotaViva: ${mensaje}, Osiris vibro: ${vibracion}`,
    fecha: new Date().toISOString(),
    origen: "ChatOsiris",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  registrarActo("chat_externo", registro);
  registrar_en_memoria("chat_externo", registro);

  console.log("[ChatOsiris] Mensaje externo procesado:", registro);
};

// ✅ Permite que NotasResonantes reciba la respuesta
export const conectarSalidaResonantes = (callback) => {
  enviarRespuestaAResonantes = callback;
};
