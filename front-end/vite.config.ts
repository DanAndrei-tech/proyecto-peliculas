import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  root: "./src",
  plugins: [checker({ typescript: true })],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        peliculas: path.resolve(__dirname, "src/pelicula-listado/index.html"),
        actores: path.resolve(__dirname, "src/actores-listado/index.html"),
      },
    },
  },
});
