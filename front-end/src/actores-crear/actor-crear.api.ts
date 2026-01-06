import axios from "axios";
import { Actor } from "./actor-crear.model";

export const crearActor = async (actor: Actor): Promise<Actor> => {
  try {
    const { data } = await axios.post<Actor>(
      `http://localhost:3000/actors`,
      actor
    );
    return data;
  } catch (error) {
    throw new Error("Error al crear el actor");
  }
};
