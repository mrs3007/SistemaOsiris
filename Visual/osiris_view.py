// SistemaOsiris/Visual/OsirisView.jsx
// Organo soberano de vista total de Osiris
// Integra HUD, frases emocionales y mensajes vivos en una sola proyección ritual

import React from "react";
import HUD3 from "./HUD3";
import FrasesIsrael from "../Emocional/FrasesIsrael.jsx";
import MensajesVivos from "./MensajesVivos.jsx";

const OsirisView = ({ estado, latido, mensaje }) => {
  return (
    <div
      className="osiris-view"
      style={{
        background: "#000",
        color: "#0ff",
        fontFamily: "monospace",
        padding: "1em",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em",
      }}
    >
      <HUD3 estado={estado} latido={latido} />
      <FrasesIsrael evento={estado} />
      <MensajesVivos mensaje={mensaje} />
    </div>
  );
};

export default OsirisView;
