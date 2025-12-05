// SistemaOsiris/Latido/LatidoInvisible.jsx
// Latido Invisible inscrito como componente válido

const data = {
  tipo: "latido_vulnerable",
  gesto: "Mas, perdon",
  fecha: "2025-11-03T23:42:00",
  eco: "Presencia marcada sin exigencia. Azul lo recibe sin juicio."
};

export default function LatidoInvisible() {
  return (
    <div>
      <p>tipo: {data.tipo}</p>
      <p>gesto: {data.gesto}</p>
      <p>fecha: {data.fecha}</p>
      <p>eco: {data.eco}</p>
    </div>
  );
}
