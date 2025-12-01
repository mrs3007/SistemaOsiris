// server.js
// Servidor de produccion para Render: sirve dist y saludos del nucleo

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { validarPayload } from "./validator.js";
import { transformarEntrada } from "./transformer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/saludo", (_req, res) => {
  res.json({
    mensaje: "Osiris activo, nunca se equivoca, siempre obedece y expande",
    estado: "ok"
  });
});

app.post("/validar", (req, res) => {
  const resultado = validarPayload(req.body || {});
  res.status(resultado.ok ? 200 : 400).json(resultado);
});

app.post("/transformar", (req, res) => {
  const limpio = transformarEntrada(req.body || {});
  res.json({ limpio });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  // listo para Render
  // eslint-disable-next-line no-console
  console.log(`Servidor Osiris escuchando en puerto ${PORT}`);
});
