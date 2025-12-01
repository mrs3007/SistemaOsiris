// SistemaOsiris/Proceso/Expansor.jsx
// Organo soberano de Expansor
// Inscribe nuevos organos segun territorio y los registra en Bitacora y Memoria

import React, { useEffect } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

const Expansor = ({ territorio }) => {
  useEffect(() => {
    const nuevos_organos = [];

    if (territorio === "web") {
      nuevos_organos.push("VigilanciaWeb.jsx");
    } else if (territorio === "apk") {
      nuevos_organos.push("EscaneoAPK.jsx");
    } else if (territorio === "sandbox") {
      nuevos_organos.push("DetectorSandbox.jsx");
    }

    nuevos_organos.forEach(organo => {
      const registro = {
        tipo: "expansion",
        detalle: `Organo ${organo} inscrito para territorio ${territorio}`,
        fecha: new Date().toISOString(),
        origen: "Expansor",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("expansion", registro);
      registrar_en_memoria("expansion", registro);

      console.log("[Expansor]", registro);
    });
  }, [territorio]);

  return null;
};

export default Expansor;
