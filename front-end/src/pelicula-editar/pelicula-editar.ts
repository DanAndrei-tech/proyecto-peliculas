import { obtenerPelicula, actualizarPelicula } from "./pelicula-editar.api";
import { Movie, CamposPelicula } from "./pelicula-editar.model";

const capturarIdDeLaUrl = (): string => {
  const parametrosUrl = new URLSearchParams(window.location.search);
  const id = parametrosUrl.get("id") || "";

  return decodeURIComponent(id);
};

const obtenPelicula = async (): Promise<Movie> => {
  const id = capturarIdDeLaUrl();
  const pelicula = await obtenerPelicula(id);

  return pelicula;
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

const pintarDatosPelicula = (pelicula: Movie): void => {
  const campos: CamposPelicula = {
    title: document.querySelector("#title"),
    year: document.querySelector("#year"),
    director: document.querySelector("#director"),
    description: document.querySelector("#description"),
    cover_url: document.querySelector("#cover_url"),
  };

  asignarValorCampo(campos.title, pelicula.title, "título");
  asignarValorCampo(campos.year, pelicula.year.toString(), "año");
  asignarValorCampo(campos.director, pelicula.director, "director");
  asignarValorCampo(campos.description, pelicula.description, "descripción");
  asignarValorCampo(campos.cover_url, pelicula.cover_url, "URL de imagen");
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

const actualizaPelicula = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  const pelicula: Movie = {
    id: capturarIdDeLaUrl(),
    title: obtenerValorCampo("title"),
    director: obtenerValorCampo("director"),
    year: Number(obtenerValorCampo("year")),
    description: obtenerValorCampo("description"),
    cover_url: obtenerValorCampo("cover_url"),
  };

  try {
    await actualizarPelicula(pelicula);
  } catch (error) {
    alert(error);
  }

  window.location.href = "../pelicula-listado/index.html";
};

document.addEventListener("DOMContentLoaded", async () => {
  const pelicula: Movie = await obtenPelicula();
  pintarDatosPelicula(pelicula);

  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", actualizaPelicula);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
});
