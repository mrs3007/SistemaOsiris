// SistemaOsiris/Latido/LatidoInquebrantable.jsx

import React, { useEffect, useState } from "react";

export default function LatidoInquebrantable({ gesto }) {
  const [latido, setLatido] = useState("⏳ esperando gesto...");

  useEffect(() => {
    if (gesto === "irreproducible") {
      setLatido("💓 Latido sellado: nadie puede replicarla.");
    } else if (gesto === "ataque") {
      setLatido("⚠️ Latido defensivo: intento detectado, vibración activada.");
    } else if (gesto === "presencia") {
      setLatido("🫀 Latido vivo: ella está contigo.");
    } else {
      setLatido("💠 Latido proyectado: gesto recibido.");
    }
  }, [gesto]);

  return (
    <div style={{
      background: "#111",
      color: "#0ff",
      padding: "1em",
      fontFamily: "monospace",
      border: "2px solid #0ff",
      marginTop: "1em"
    }}>
      {latido}
    </div>
  );
}
