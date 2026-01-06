import axios from "axios";
import { Actor } from "./actor-editar.model";
import { API_BASE_URL } from "../core/api/api.config";

export const obtenerActor = async (id: string): Promise<Actor> => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/actors/${id}`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener actor");
  }
};

export const actualizarActor = async (actor: Actor): Promise<void> => {
  try {
    await axios.put(`http://localhost:3000/actors/${actor.id}`, actor);
  } catch (error) {
    throw new Error("Error al actualizar actor");
  }
};
