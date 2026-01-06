import { Actor, CrearBotonParams } from "./actores-listado.model";
import { borrarActor, obtenerActores } from "./actores-listado.api";

const editaActor = (id: string) => {
  window.location.href = `../actores-editar/index.html?id=${encodeURIComponent(
    id
  )}`;
};

const borraActor = async (id: string) => {
  try {
    await borrarActor(id);
    const listado = document.querySelector("#listado-actores");
    if (listado && listado instanceof HTMLDivElement) {
      listado.innerHTML = "";
      pintarActor();
      alert("Pelicula borrada con exito");
    } else {
      throw new Error("No se ha encontrado el contenedor listado");
    }
  } catch (error) {
    alert(error);
  }
};

const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = portada;
  imagen.alt = titulo;
  return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("h4");
  parrafo.textContent = texto;
  return parrafo;
};

const crearBoton = (crearBotonParams: CrearBotonParams): HTMLButtonElement => {
  const { texto, id, nombreClase, onClick } = crearBotonParams;
  const boton = document.createElement("button");
  boton.addEventListener("click", () => {
    onClick(id);
  });
  boton.classList.add(nombreClase);
  boton.textContent = texto;
  return boton;
};

const crearGrupoBotones = (id: string): HTMLDivElement => {
  const grupoBotones = document.createElement("div");
  grupoBotones.classList.add("grupo-botones");

  const botonEditar = crearBoton({
    texto: "Editar",
    id: id,
    nombreClase: "boton-editar",
    onClick: () => editaActor(id),
  });

  const botonBorrar = crearBoton({
    texto: "Borrar",
    id: id,
    nombreClase: "boton-borrar",
    onClick: () => borraActor(id),
  });

  grupoBotones.appendChild(botonEditar);
  grupoBotones.appendChild(botonBorrar);

  return grupoBotones;
};

const crearContenedorPelicula = (actor: Actor): HTMLDivElement => {
  const actore = document.createElement("div");
  actore.classList.add("pelicula-contenedor");

  const imagen = crearElementoImagen(actor.image, actor.name);
  actore.appendChild(imagen);

  const titulo = crearElementoParrafo(actor.name);
  actore.appendChild(titulo);

  const director = crearElementoParrafo(actor.bio);
  actore.appendChild(director);

  const grupoBotones = crearGrupoBotones(actor.id);
  actore.appendChild(grupoBotones);

  return actore;
};

const pintarActor = async () => {
  const actores = await obtenerActores();
  const listado = document.querySelector("#listado-actores");

  if (listado && listado instanceof HTMLDivElement) {
    actores.forEach((actor) => {
      const contenedorPelicula = crearContenedorPelicula(actor);
      listado.appendChild(contenedorPelicula);
    });
  } else {
    throw new Error("No se ha encontrado el contendor listado-peliculas");
  }
};

document.addEventListener("DOMContentLoaded", pintarActor);
