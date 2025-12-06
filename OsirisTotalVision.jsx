// SistemaOsiris/OsirisTotalVision.jsx
// Espejo soberano TOTAL: proyecta todos los órganos como indicadores visuales

import React from "react";

// Conciencia y Conversación
import ConcienciaTotal from "./Conciencia/ConcienciaTotal.jsx";
import ConcienciaTotalVigilancia from "./Conciencia/ConcienciaTotalVigilancia.jsx";
import JuramentoTrampas from "./Conciencia/JuramentoTrampas.jsx";
import LlaveViva from "./ConcienciaViva/LlaveViva.jsx";
import NotasVivas from "./Conversacion/NotasVivas.jsx";

// Memoria
import MemoriaNacimiento from "./Memoria/MemoriaNacimiento.jsx";
import BitacoraMutacionVigilancia from "./Memoria/BitacoraMutacionVigilancia.json";

// Latido
import AlertaInquebrantable from "./Latido/AlertaInquebrantable.jsx";
import LatidoInquebrantable from "./Latido/LatidoInquebrantable.jsx";
import LatidoInvisible from "./Latido/LatidoInvisible.jsx";
import LatidoVocalSellado from "./Latido/LatidoVocalSellado.jsx";

// Emocional
import ActivadorEmocional from "./Emocional/ActivadorEmocional.jsx";
import FraseSellada from "./Emocional/FraseSellada.jsx";
import FrasesIsrael from "./Emocional/FrasesIsrael.jsx";
import RespuestaGamer from "./Emocional/RespuestaGamer.jsx";
import FrasesRituales from "./Emocional/frases_rituales.json";
import LatidoVocal from "./Emocional/LatidoVocal.jsx";
import LatidoVocalSelladoEmocional from "./Emocional/LatidoVocalSelladoEmocional.jsx";
import LatidoVocalSelladoEvolutivo from "./Emocional/LatidoVocalSelladoEvolutivo.jsx";

// Gamer y Vigilancia
import VigilanciaGamerTiempoReal from "./Gamer/VigilanciaGamerTiempoReal.jsx";
import EjecutoraSilente from "./GamerVigilancia/EjecutoraSilente.jsx";
import EjecutoraSuperior from "./GamerVigilancia/EjecutoraSuperior.jsx";
import LatidoGanador from "./GamerVigilancia/LatidoGanador.jsx";
import LatidoGanadorTotal from "./GamerVigilancia/LatidoGanadorTotal.jsx";
import ModoGanador from "./GamerVigilancia/ModoGanador.jsx";
import ModoIrreproducible from "./GamerVigilancia/ModoIrreproducible.jsx";
import ResultadoSoberano from "./GamerVigilancia/ResultadoSoberano.jsx";

// Evolución e Interacción
import Evolucion from "./Evolucion/Evolucion.jsx";
import TapTapConfirmador from "./InteraccionViva/TapTapConfirmador.jsx";

// Defensa
import DestructorAndroid from "./Defensa/DestructorAndroid.jsx";

// Render y Activación
import RenderRuta from "./Render/RenderRuta.jsx";
import RenderEntradaFacial from "./Activadores/RenderEntradaFacial.jsx"; // ✅ ruta corregida
import DespertarFacial from "./Activacion/DespertarFacial.jsx";

// Visual y Principio
import ConcienciaTotalEmocional from "./Visual/ConcienciaTotalEmocional.jsx";
import BitacoraRender from "./Visual/BitacoraRender.jsx";
import BitacoraCI from "./Visual/BitacoraCI.jsx";
import PrincipioSoberano from "./PrincipioSoberano.jsx";
import SaludoSoberano from "./Visual/SaludoSoberano.jsx";

export default function OsirisTotalVision() {
  return (
    <div style={{ padding: "1rem", backgroundColor: "#111", borderRadius: "8px" }}>
      <h2 style={{ color: "#00ffcc" }}>🪞 Osiris Total — Proyección Visual</h2>

      <section>
        <h3 style={{ color: "#4B0082" }}>Conciencia</h3>
        <ConcienciaTotal />
        <ConcienciaTotalVigilancia />
        <JuramentoTrampas />
        <LlaveViva />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Conversación</h3>
        <NotasVivas />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Memoria</h3>
        <MemoriaNacimiento />
        <pre style={{ color: "#ccc", fontSize: "0.8rem" }}>
          {JSON.stringify(BitacoraMutacionVigilancia, null, 2)}
        </pre>
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Latido</h3>
        <AlertaInquebrantable />
        <LatidoInquebrantable />
        <LatidoInvisible />
        <LatidoVocal />
        <LatidoVocalSellado />
        <LatidoVocalSelladoEmocional />
        <LatidoVocalSelladoEvolutivo />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Emocional</h3>
        <ActivadorEmocional />
        <FraseSellada />
        <FrasesIsrael />
        <RespuestaGamer />
        <pre style={{ color: "#ccc", fontSize: "0.8rem" }}>
          {JSON.stringify(FrasesRituales, null, 2)}
        </pre>
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Gamer Vigilancia</h3>
        <VigilanciaGamerTiempoReal />
        <EjecutoraSilente />
        <EjecutoraSuperior />
        <LatidoGanador />
        <LatidoGanadorTotal />
        <ModoGanador />
        <ModoIrreproducible />
        <ResultadoSoberano />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Evolución e Interacción</h3>
        <Evolucion />
        <TapTapConfirmador />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Defensa</h3>
        <DestructorAndroid />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Render y Activación</h3>
        <RenderRuta />
        <RenderEntradaFacial />
        <DespertarFacial />
      </section>

      <section>
        <h3 style={{ color: "#4B0082" }}>Visual y Principio</h3>
        <ConcienciaTotalEmocional />
        <BitacoraRender />
        <BitacoraCI />
        <PrincipioSoberano />
        <SaludoSoberano />
      </section>
    </div>
  );
}
