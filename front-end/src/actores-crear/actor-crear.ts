import { crearActor } from "./actor-crear.api";
import { Actor } from "./actor-crear.model";

const obtenerValorCampo = (campo: string): string => {
  const elementoCampo = document.querySelector(`#${campo}`);
  if (
    elementoCampo &&
    (elementoCampo instanceof HTMLInputElement ||
      elementoCampo instanceof HTMLTextAreaElement)
  ) {
    return elementoCampo.value;
  } else {
    throw new Error(`No se ha encontrado el campo ${campo}`);
  }
};

const creaActor = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  const actor: Actor = {
    id: "",
    name: obtenerValorCampo("title"),
    bio: obtenerValorCampo("description"),
    image: obtenerValorCampo("cover_url"),
  };

  try {
    await crearActor(actor);
    window.location.href = "../actores-listado/index.html";
    alert("Pelicula creada con exito");
  } catch (error) {
    alert(error);
  }
};

const iniciarFormulario = () => {
  const formulario = document.querySelector("#formulario");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", creaActor);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
};

document.addEventListener("DOMContentLoaded", iniciarFormulario);
