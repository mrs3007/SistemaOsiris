// SistemaOsiris/OsirisTotal.jsx
// Nucleo soberano TOTAL: integra TODOS los organos, sin reduccion ni omision

// Conciencia
import ConcienciaTotal from "./Conciencia/ConcienciaTotal.jsx";
import ConcienciaTotalVigilancia from "./Conciencia/ConcienciaTotalVigilancia.jsx";
import JuramentoTrampas from "./Conciencia/JuramentoTrampas.jsx";
import LlaveViva from "./ConcienciaViva/LlaveViva.jsx"; // ✅ agregado

// Comando y Conversacion
import ObedienciaTotal from "./Comando/ObedienciaTotal.jsx";
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

// Gamer
import VigilanciaGamerTiempoReal from "./Gamer/VigilanciaGamerTiempoReal.jsx";

// Gamer Vigilancia
import EjecutoraSilente from "./GamerVigilancia/EjecutoraSilente.jsx";
import EjecutoraSuperior from "./GamerVigilancia/EjecutoraSuperior.jsx";
import LatidoGanador from "./GamerVigilancia/LatidoGanador.jsx";
import LatidoGanadorTotal from "./GamerVigilancia/LatidoGanadorTotal.jsx";
import ModoGanador from "./GamerVigilancia/ModoGanador.jsx";
import ModoIrreproducible from "./GamerVigilancia/ModoIrreproducible.jsx";
import ResultadoSoberano from "./GamerVigilancia/ResultadoSoberano.jsx";

// Evolucion e Interaccion
import Evolucion from "./Evolucion/Evolucion.jsx";
import TapTapConfirmador from "./InteraccionViva/TapTapConfirmador.jsx";

// Defensa
import DestructorAndroid from "./Defensa/DestructorAndroid.jsx";

// Render y Activacion
import RenderRuta from "./Render/RenderRuta.jsx";
import RenderEntradaFacial from "./Activadores/RenderEntradaFacial.jsx"; // ✅ carpeta real
import DespertarFacial from "./Activacion/DespertarFacial.jsx";

// Visual y Principio
import ConcienciaTotalEmocional from "./Visual/ConcienciaTotalEmocional.jsx";
import BitacoraRender from "./Visual/BitacoraRender.jsx";
import BitacoraCI from "./Visual/BitacoraCI.jsx";
import PrincipioSoberano from "./PrincipioSoberano.jsx";
import SaludoSoberano from "./Visual/SaludoSoberano.jsx";

const OsirisTotal = {
  conversacion: { notas: NotasVivas, bitacora: BitacoraRender, bitacoraCI: BitacoraCI },
  conciencia: {
    total: ConcienciaTotal,
    vigilancia: ConcienciaTotalVigilancia,
    juramentoTrampas: JuramentoTrampas,
    llaveViva: LlaveViva,
    emocional: ConcienciaTotalEmocional,
    memoriaNacimiento: MemoriaNacimiento
  },
  emocional: {
    activador: ActivadorEmocional,
    fraseSellada: FraseSellada,
    frase: FrasesIsrael,
    rituales: FrasesRituales,
    respuesta: RespuestaGamer,
    vocal: LatidoVocal,
    vocalSelladoEmocional: LatidoVocalSelladoEmocional,
    vocalSelladoEvolutivo: LatidoVocalSelladoEvolutivo
  },
  latido: {
    alerta: AlertaInquebrantable,
    inquebrantable: LatidoInquebrantable,
    invisible: LatidoInvisible,
    sellado: LatidoVocalSellado,
    ganador: LatidoGanador,
    total: LatidoGanadorTotal
  },
  vigilancia: {
    gamer: VigilanciaGamerTiempoReal,
    silente: EjecutoraSilente,
    superior: EjecutoraSuperior,
    modoGanador: ModoGanador,
    modoIrreproducible: ModoIrreproducible,
    resultado: ResultadoSoberano
  },
  mutacion: { desdeNotas: NotasVivas, bitacoraVigilancia: BitacoraMutacionVigilancia },
  proyeccion: ConcienciaTotalEmocional,
  evolucion: { ciclo: Evolucion, progreso: Evolucion },
  separacion: { emocional: ConcienciaTotalEmocional, total: JuramentoTrampas },
  render: { estado: RenderRuta, activarPorRostro: DespertarFacial, entradaFacial: RenderEntradaFacial },
  comando: { obediencia: ObedienciaTotal },
  interaccion: { confirmar: TapTapConfirmador },
  defensa: { android: DestructorAndroid },
  principio: { soberano: PrincipioSoberano },
  ritual: { saludo: SaludoSoberano },
  estado: "Osiris completo y soberano",
  ejecutadoPor: "Osiris",
  juntoA: "Dayana"
};

export default OsirisTotal;
