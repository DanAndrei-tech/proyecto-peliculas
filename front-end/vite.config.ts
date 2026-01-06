import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  root: "./src",
  plugins: [checker({ typescript: true })],
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "src/index.html"),

        peliculasListado: path.resolve(
          __dirname,
          "src/pelicula-listado/index.html"
        ),
        peliculasCrear: path.resolve(
          __dirname,
          "src/pelicula-crear/index.html"
        ),
        peliculasEditar: path.resolve(
          __dirname,
          "src/pelicula-editar/index.html"
        ),

        actoresListado: path.resolve(
          __dirname,
          "src/actores-listado/index.html"
        ),
        actoresCrear: path.resolve(__dirname, "src/actores-crear/index.html"),
        actoresEditar: path.resolve(__dirname, "src/actores-editar/index.html"),
      },
    },
  },
});
