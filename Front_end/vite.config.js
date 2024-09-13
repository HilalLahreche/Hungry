import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ces alias aident à résoudre les problèmes d'importation des images de Leaflet
      leaflet: path.resolve(__dirname, "node_modules/leaflet"),
      "leaflet/dist/images": path.resolve(
        __dirname,
        "node_modules/leaflet/dist/images"
      ),
    },
  },
  optimizeDeps: {
    include: ["leaflet"],
  },
  build: {
    commonjsOptions: {
      include: [/leaflet/, /node_modules/],
    },
  },
});
