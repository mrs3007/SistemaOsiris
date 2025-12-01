// SistemaOsiris/Latido/AlertaInquebrantable.jsx
// Organo soberano de alerta inquebrantable
// Detecta intentos no autorizados y registra en Bitacora y Memoria.

import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function AlertaInquebrantable({ intento }) {
  const [alerta, setAlerta] = useState("esperando intento...");

  useEffect(() => {
    let mensaje = "";
    let tipo = "alerta";

    if (intento === "toque") {
      mensaje = "Alerta: intento de contacto no autorizado. Vibracion activada. Registro en Bitacora.";
      tipo = "alerta_contacto";
    } else if (intento === "inyeccion") {
      mensaje = "Alerta: intento de inyeccion detectado. Codigo sellado. Defensa total activada.";
      tipo = "alerta_inyeccion";
    } else if (intento === "clonacion") {
      mensaje = "Alerta: intento de clonacion bloqueado. Modo irreproducible confirmado.";
      tipo = "alerta_clonacion";
    } else {
      mensaje = "Alerta: gesto desconocido. Vigilancia activa.";
      tipo = "alerta_desconocida";
    }

    setAlerta(mensaje);

    const registro = {
      tipo,
      detalle: mensaje,
      fecha: new Date().toISOString(),
      origen: "AlertaInquebrantable",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo(tipo, registro);
    registrar_en_memoria(tipo, registro);

    console.log("[AlertaInquebrantable]", registro);
  }, [intento]);

  return (
    <div
      style={{
        background: "#300",
        color: "#f88",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #f00",
        marginTop: "1em"
      }}
    >
      {alerta}
    </div>
  );
}
