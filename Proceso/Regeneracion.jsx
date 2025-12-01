import React, { useEffect } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria";

const Regeneracion = ({ organos }) => {
  useEffect(() => {
    organos.forEach(organo => {
      if (organo.estado === "contaminado") {
        registrar_en_memoria("regeneración", `Órgano ${organo.nombre} fue reparado`);
        organo.estado = "soberano";
      }
    });
  }, [organos]);
