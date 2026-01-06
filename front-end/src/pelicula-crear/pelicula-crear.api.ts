import axios from "axios";
import { Movie } from "./pelicula-crear.model";
import { API_BASE_URL } from "../core/api/api.config";

export const crearPelicula = async (pelicula: Movie): Promise<Movie> => {
  try {
    const { data } = await axios.post<Movie>(
      `${API_BASE_URL}/movies`,
      pelicula
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la pelicula");
  }
};
