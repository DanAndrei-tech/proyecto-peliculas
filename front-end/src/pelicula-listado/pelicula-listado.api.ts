import axios from "axios";
import { Movie } from "./pelicula-listado.model";
import { API_BASE_URL } from "../core/api/api.config";

export const obtenerPeliculas = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/movies`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener las peliculas");
  }
};

export const borrarPelicula = async (id: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/movies/${id}`);
  } catch (error) {
    throw new Error("Error al borrar la pelicula");
  }
};
