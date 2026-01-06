import axios from "axios";
import { Movie } from "./pelicula-editar.model";
import { API_BASE_URL } from "../core/api/api.config";

export const obtenerPelicula = async (id: string): Promise<Movie> => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/movies/${id}`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener la pelicula");
  }
};

export const actualizarPelicula = async (pelicula: Movie): Promise<void> => {
  try {
    await axios.put(`http://localhost:3000/movies/${pelicula.id}`, pelicula);
  } catch (error) {
    throw new Error("Error al actualizar pelicula");
  }
};
