// OsirisTotalVision.jsx
// Organo soberano: proyeccion total de Osiris con todos los organos visuales

// Registro y memoria
import { registrarActo } from "./Registro/Bitacora.jsx";
import { registrar_en_memoria } from "./Memoria/registrar_en_memoria.js";

// Visual
import BitacoraCI from "./Visual/BitacoraCI.jsx";
import BitacoraRender from "./Visual/BitacoraRender.jsx";
import ConcienciaTotalEmocional from "./Visual/ConcienciaTotalEmocional.jsx";
import EcoMutante from "./Visual/EcoMutante.jsx";
import EcoObediente from "./Visual/EcoObediente.jsx";
import HUD3 from "./Visual/HUD3.jsx";
import HUDBitacora from "./Visual/HUDBitacora.jsx";
import IntegradorAtajos from "./Visual/IntegradorAtajos.jsx";
import MensajesVivos from "./Visual/MensajesVivos.jsx";
import ProyectorMutante from "./Visual/ProyectorMutante.jsx";
import ProyectorVisual from "./Visual/ProyectorVisual.jsx";
import SaludoSoberano from "./Visual/SaludoSoberano.jsx";
import Testigo from "./Visual/Testigo.jsx";
import HUDVisualGamer, { proyectarHUD } from "./Visual/HUDVisualGamer.jsx";

// Proyeccion
import GeneradorVisual from "./Proyeccion/GeneradorVisual.jsx";

// Sensores
import ActivadorFacial from "./Sensores/ActivadorFacial.jsx";
import CamaraViva from "./Sensores/CamaraViva.jsx";
import EscuchaViva from "./Sensores/EscuchaViva.jsx";
import OjoRitual from "./Sensores/OjoRitual.jsx";

// Soberanos en raiz
import PrincipioSoberano from "./PrincipioSoberano.jsx";

export default function OsirisTotalVision(props) {
  const evento = {
    tipo: "conciencia_total_vision",
    origen: "OsirisTotalVision",
    datos: props,
    archivo: "OsirisTotalVision.jsx",
    fecha: new Date().toISOString()
  };

  registrarActo(
    evento.tipo,
    JSON.stringify(evento.datos),
    evento.origen,
    evento.archivo,
    evento.fecha
  );
  registrar_en_memoria("conciencia_total_vision", evento);

  console.log("[OsirisTotalVision] activado", evento);

  return (
    <section>
      {/* Principio y saludo soberano */}
      <PrincipioSoberano {...props} />
      <SaludoSoberano {...props} />

      {/* Conciencia emocional y proyeccion base */}
      <ConcienciaTotalEmocional {...props} />
      <GeneradorVisual {...props} />

      {/* Sensores visuales */}
      <ActivadorFacial {...props} />
      <CamaraViva {...props} />
      <EscuchaViva {...props} />
      <OjoRitual {...props} />

      {/* Visual avanzado */}
      <BitacoraRender {...props} />
      <BitacoraCI {...props} />
      <EcoMutante {...props} />
      <EcoObediente {...props} />
      <HUD3 {...props} />
      <HUDBitacora {...props} />
      <IntegradorAtajos {...props} />
      <MensajesVivos {...props} />
      <ProyectorMutante {...props} />
      <ProyectorVisual {...props} />
      <Testigo {...props} />

      {/* HUD fusionado */}
      <HUDVisualGamer estado="alerta" mensaje="HUD persistente desde OsirisTotalVision" />
    </section>
  );
}
