import React, { useEffect } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria";

const Regeneracion = ({ organos }) => {
  useEffect(() => {
    if (!organos) return;

    organos.forEach(organo => {
      if (organo.estado === "contaminado") {
        registrar_en_memoria(
          "regeneración",
          `Organo ${organo.nombre} fue reparado`
        );
        organo.estado = "soberano";
      }
    });
  }, [organos]);

  // El componente no renderiza nada visible, solo ejecuta el efecto
  return null;
};

export default Regeneracion;
