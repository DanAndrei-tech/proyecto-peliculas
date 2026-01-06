# 🎬 Proyecto Películas

Aplicación web para la gestión de películas y actores desarrollada con **TypeScript + Vite** como **Multi-Page Application (MPA)**.  
El proyecto consume una API simulada con `json-server` desplegada en Railway y el frontend estático se sirve desde Netlify.

---

## 🚀 Tecnologías utilizadas

### Frontend

- **TypeScript**
- **Vite**
- **HTML5 / CSS3**
- **Axios**
- Arquitectura **MPA (Multi-Page Application)**

### Backend

- **Node.js**
- **json-server**
- API REST simulada
- Desplegado en **Railway**

### Deploy

- **Frontend:** Netlify
- **Backend:** Railway

---

## 📂 Estructura del proyecto

```txt
proyecto-peliculas/
├── backend/
│   ├── db.json
│   ├── package.json
│   └── server (json-server)
│
├── front-end/
│   ├── src/
│   │   ├── index.html
│   │   ├── pelicula-listado/
│   │   ├── pelicula-crear/
│   │   ├── pelicula-editar/
│   │   ├── actores-listado/
│   │   ├── actores-crear/
│   │   └── actores-editar/
│   ├── vite.config.ts
│   └── package.json
│
└── README.md
```
