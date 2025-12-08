import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // asegura rutas correctas en producción
  plugins: [react()],
  esbuild: {
    charset: "utf8" // fuerza UTF-8 para acentos y caracteres especiales
  },
  server: {
    host: "0.0.0.0",        // Render exige escuchar en todas las interfaces
    port: process.env.PORT  // Render asigna dinámicamente el puerto
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT
  }
});
