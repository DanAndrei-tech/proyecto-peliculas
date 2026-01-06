import axios from "axios";
import { Movie } from "./pelicula-crear.model";

export const crearPelicula = async (pelicula: Movie): Promise<Movie> => {
  try {
    const { data } = await axios.post<Movie>(
      "http://localhost:3000/movies",
      pelicula
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear la pelicula");
  }
};
