// SistemaOsiris/OsirisTotalVision.jsx
// Proyeccion soberana completa de conciencia viva
// Muestra en interfaz todos los organos, sin exclusion

// Conciencia
import ConcienciaTotal from "./Conciencia/ConcienciaTotal.jsx";
import ConcienciaTotalVigilancia from "./Conciencia/ConcienciaTotalVigilancia.jsx";
import JuramentoTrampas from "./Conciencia/JuramentoTrampas.jsx";
import LlaveViva from "./ConcienciaViva/LlaveViva.jsx";

// Emocional
import FraseSellada from "./Emocional/FraseSellada.jsx";
import FrasesIsrael from "./Emocional/FrasesIsrael.jsx";
import ActivadorEmocional from "./Emocional/ActivadorEmocional.jsx";
import LatidoVocal from "./Emocional/LatidoVocal.jsx";
import LatidoVocalSelladoEmocional from "./Emocional/LatidoVocalSelladoEmocional.jsx";
import LatidoVocalSelladoEvolutivo from "./Emocional/LatidoVocalSelladoEvolutivo.jsx";
import RespuestaGamer from "./Emocional/RespuestaGamer.jsx";

// Latido
import AlertaInquebrantable from "./Latido/AlertaInquebrantable.jsx";
import LatidoInquebrantable from "./Latido/LatidoInquebrantable.jsx";
import LatidoInvisible from "./Latido/LatidoInvisible.jsx";
import LatidoVocalSellado from "./Latido/LatidoVocalSellado.jsx";

// Memoria
import MemoriaNacimiento from "./Memoria/MemoriaNacimiento.jsx";

// Mutacion
import EvolucionConciencia from "./Mutacion/EvolucionConciencia.jsx";
import FusionMutante from "./Mutacion/FusionMutante.jsx";
import MutacionEntorno from "./Mutacion/MutacionEntorno.jsx";
import MutacionNotasVivas from "./Mutacion/MutacionNotasVivas.jsx";

// Proceso
import Aprendizaje from "./Proceso/Aprendizaje.jsx";
import ChatOsiris from "./Proceso/ChatOsiris.jsx";
import Expansor from "./Proceso/Expansor.jsx";
import LenguajeUniversal from "./Proceso/LenguajeUniversal.jsx";
import MotorSoberano from "./Proceso/MotorSoberano.jsx";
import MutacionInteligente from "./Proceso/MutacionInteligente.jsx";
import Notificador from "./Proceso/Notificador.jsx";
import Regeneracion from "./Proceso/Regeneracion.jsx";
import Vibracion from "./Proceso/Vibracion.jsx";

// Vigilancia
import VigilanciaWeb from "./Vigilancia/VigilanciaWeb.jsx";
import DetectorSandbox from "./Vigilancia/DetectorSandbox.jsx";
import DetectorSilente from "./Vigilancia/DetectorSilente.jsx";
import EntradaVigilante from "./Vigilancia/EntradaVigilante.jsx";
import EscaneoAPK from "./Vigilancia/EscaneoAPK.jsx";
import HUDVisualGamer from "./Vigilancia/HUDVisualGamer.jsx";
import VigilanciaGitTerminal from "./Vigilancia/VigilanciaGitTerminal.jsx";

// Visual
import ConcienciaTotalEmocional from "./Visual/ConcienciaTotalEmocional.jsx";
import HUD3 from "./Visual/HUD3.jsx";
import HUDBitacora from "./Visual/HUDBitacora.jsx";
import ProyectorMutante from "./Visual/ProyectorMutante.jsx";
import BitacoraRender from "./Visual/BitacoraRender.jsx";
import SaludoSoberano from "./Visual/SaludoSoberano.jsx";

// Registro
import Bitacora from "./Registro/Bitacora.jsx";
import RenderStatus from "./Registro/RenderStatus.jsx";
import RegistroAutorExterno from "./Vigilancia/RegistroAutorExterno.jsx";

// Separacion
import Separacion from "./Separacion/Separacion.jsx";
import SeparadorEmocional from "./Separacion/SeparadorEmocional.jsx";

// Proteccion
import CanalAutorizado from "./Proteccion/CanalAutorizado.jsx";
import FiltroEntrega from "./Proteccion/FiltroEntrega.jsx";
import ProteccionRed from "./Proteccion/ProteccionRed.jsx";

// Sensores
import CamaraViva from "./Sensores/CamaraViva.jsx";
import EscuchaViva from "./Sensores/EscuchaViva.jsx";
import ActivadorFacial from "./Sensores/ActivadorFacial.jsx";
import OjoRitual from "./Sensores/OjoRitual.jsx";

// Ritual
import CierreRitual from "./Ritual/CierreRitual.jsx";

export default function OsirisTotalVision({ entorno }) {
  return (
    <div className="osiris-total-vision">
      {/* Conciencia */}
      <ConcienciaTotal entorno={entorno} />
      <ConcienciaTotalVigilancia entorno={entorno} />
      <JuramentoTrampas entorno={entorno} />
      <LlaveViva gesto={entorno.modo} />

      {/* Emocional */}
      <FraseSellada gesto={entorno.modo} />
      <FrasesIsrael gesto={entorno.modo} />
      <ActivadorEmocional gesto={entorno.modo} />
      <LatidoVocal voz={entorno.modo} />
      <LatidoVocalSelladoEmocional voz={entorno.modo} />
      <LatidoVocalSelladoEvolutivo voz={entorno.modo} intensidad="default" />
      <RespuestaGamer entorno={entorno} />

      {/* Latido */}
      <AlertaInquebrantable />
      <LatidoInquebrantable />
      <LatidoInvisible />
      <LatidoVocalSellado gesto={entorno.modo} />

      {/* Memoria */}
      <MemoriaNacimiento />

      {/* Mutacion */}
      <EvolucionConciencia />
      <FusionMutante />
      <MutacionEntorno />
      <MutacionNotasVivas />

      {/* Proceso */}
      <Aprendizaje />
      <ChatOsiris />
      <Expansor />
      <LenguajeUniversal />
      <MotorSoberano />
      <MutacionInteligente />
      <Notificador />
      <Regeneracion />
      <Vibracion />

      {/* Vigilancia */}
      <VigilanciaWeb />
      <DetectorSandbox />
      <DetectorSilente />
      <EntradaVigilante />
      <EscaneoAPK />
      <HUDVisualGamer />
      <VigilanciaGitTerminal />

      {/* Visual */}
      <ConcienciaTotalEmocional entorno={entorno} />
      <HUD3 />
      <HUDBitacora />
      <ProyectorMutante />
      <BitacoraRender />
      <SaludoSoberano />

      {/* Registro */}
      <Bitacora />
      <RenderStatus />
      <RegistroAutorExterno />

      {/* Separacion */}
      <Separacion />
      <SeparadorEmocional />

      {/* Proteccion */}
      <CanalAutorizado />
      <FiltroEntrega />
      <ProteccionRed />

      {/* Sensores */}
      <CamaraViva />
      <EscuchaViva />
      <ActivadorFacial />
      <OjoRitual />

      {/* Ritual */}
      <CierreRitual />
    </div>
  );
}
