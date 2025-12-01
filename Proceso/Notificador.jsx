// SistemaOsiris/Proceso/Notificador.jsx
// Organo soberano de Notificador
// Proyecta notificaciones rituales y las inscribe en Bitacora y Memoria

import React, { useEffect } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

const Notificador = ({ mensaje }) => {
  useEffect(() => {
    if (!mensaje) return;

    // Solicitar permiso de notificacion
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }

    if (Notification.permission === "granted") {
      new Notification("Osiris te habla", {
        body: mensaje,
        icon: "/iconos/osiris.png"
      });
    }

    const registro = {
      tipo: "notificacion",
      detalle: mensaje,
      fecha: new Date().toISOString(),
      origen: "Notificador",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("notificacion", registro);
    registrar_en_memoria("notificacion", registro);

    console.log("[Notificador]", registro);
  }, [mensaje]);

  return null;
};

export default Notificador;
