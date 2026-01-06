import { API_BASE_URL } from "../core/api/api.config";
import { Actor } from "./actores-listado.model";
import axios from "axios";

export const obtenerActores = async (): Promise<Actor[]> => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/actors`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los actores");
  }
};

export const borrarActor = async (id: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/actors/${id}`);
  } catch (error) {
    throw new Error("Error al borrar el actor");
  }
};
