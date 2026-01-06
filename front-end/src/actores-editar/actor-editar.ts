import { obtenerActor, actualizarActor } from "./actor-editar.api";
import { Actor, CamposActor } from "./actor-editar.model";

const capturarIdDeLaUrl = (): string => {
  const parametrosUrl = new URLSearchParams(window.location.search);
  const id = parametrosUrl.get("id") || "";

  return decodeURIComponent(id);
};

const obtenActor = async (): Promise<Actor> => {
  const id = capturarIdDeLaUrl();
  const actor = await obtenerActor(id);

  return actor;
};

function asignarValorCampo<T extends HTMLInputElement | HTMLTextAreaElement>(
  campo: T | null,
  valor: string,
  nombreCampo: string
): void {
  if (
    campo &&
    (campo instanceof HTMLInputElement || campo instanceof HTMLTextAreaElement)
  ) {
    campo.value = valor;
  } else {
    throw new Error(`Error en el campo ${nombreCampo}`);
  }
}

const pintarDatosActor = (actor: Actor): void => {
  const campos: CamposActor = {
    name: document.querySelector("#title"),
    description: document.querySelector("#description"),
    image: document.querySelector("#cover_url"),
  };

  asignarValorCampo(campos.name, actor.name, "título");
  asignarValorCampo(campos.description, actor.bio, "descripción");
  asignarValorCampo(campos.image, actor.image, "URL de imagen");
};

//---------------------------ACTUALIZAR PELICULA

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

const actualizaActor = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  const actor: Actor = {
    id: capturarIdDeLaUrl(),
    name: obtenerValorCampo("title"),
    bio: obtenerValorCampo("description"),
    image: obtenerValorCampo("cover_url"),
  };

  try {
    await actualizarActor(actor);
  } catch (error) {
    alert(error);
  }

  window.location.href = "../actores-listado/index.html";
};

document.addEventListener("DOMContentLoaded", async () => {
  const actor: Actor = await obtenActor();
  pintarDatosActor(actor);

  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", actualizaActor);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
});
