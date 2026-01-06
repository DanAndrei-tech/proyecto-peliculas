import axios from "axios";
import { Actor } from "./actor-crear.model";
import { API_BASE_URL } from "../core/api/api.config";

export const crearActor = async (actor: Actor): Promise<Actor> => {
  try {
    const { data } = await axios.post<Actor>(`${API_BASE_URL}/actors`, actor);
    return data;
  } catch (error) {
    throw new Error("Error al crear el actor");
  }
};
