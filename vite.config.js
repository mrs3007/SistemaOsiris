// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // asegura rutas de assets en Render
  plugins: [react()],
  server: { host: "0.0.0.0", port: process.env.PORT || 5000 },
  preview: { host: "0.0.0.0", port: process.env.PORT || 5000 }
});
