# DevOps Project: Node.js API

## Descripción del Proyecto
Este proyecto es una API RESTful construida con Node.js y Express que permite la gestión de usuarios a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). La API incluye un endpoint de verificación de estado para asegurar su correcto funcionamiento.

## Tecnologías Utilizadas

<p align="center">
  <a href="https://nodejs.org/" target="blank"><img src="https://nodejs.org/static/images/logo.svg" height="80" alt="Node.js Logo" /></a>
  <a href="https://expressjs.com/" target="blank"><svg height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.33 773.55" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z" fill-rule="nonzero"/></svg></a>
  <a href="https://www.docker.com/" target="blank"><?xml version="1.0" encoding="utf-8"?><svg height="80" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 88.17" style="enable-background:new 0 0 122.88 88.17" xml:space="preserve"><style type="text/css">.st0{fill:#0091E2;}</style><g><path class="st0" d="M121.68,33.34c-0.34-0.28-3.42-2.62-10.03-2.62c-1.71,0-3.48,0.17-5.19,0.46c-1.25-8.72-8.49-12.94-8.78-13.16 l-1.77-1.03l-1.14,1.65c-1.42,2.22-2.51,4.73-3.13,7.29c-1.2,4.96-0.46,9.63,2.05,13.62c-3.02,1.71-7.92,2.11-8.95,2.17l-80.93,0 c-2.11,0-3.82,1.71-3.82,3.82c-0.11,7.07,1.08,14.13,3.53,20.8c2.79,7.29,6.95,12.71,12.31,16.01c6.04,3.7,15.9,5.81,27.01,5.81 c5.01,0,10.03-0.46,14.99-1.37c6.9-1.25,13.51-3.65,19.6-7.12c5.02-2.91,9.52-6.61,13.34-10.94c6.44-7.24,10.26-15.33,13.05-22.51 c0.4,0,0.74,0,1.14,0c7.01,0,11.34-2.79,13.73-5.19c1.6-1.48,2.79-3.31,3.65-5.36l0.51-1.48L121.68,33.34L121.68,33.34z M71.59,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C70.68,38.98,71.08,39.38,71.59,39.38L71.59,39.38z M56.49,11.63h10.83c0.51,0,0.97-0.4,0.97-0.97V0.97c0-0.51-0.46-0.97-0.97-0.97 L56.49,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,11.17,55.97,11.63,56.49,11.63L56.49,11.63z M56.49,25.53h10.83 c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.46-0.97-0.97-0.97H56.49c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C55.52,25.08,55.97,25.53,56.49,25.53L56.49,25.53z M41.5,25.53h10.83c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97 l0,0H41.5c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C40.53,25.08,40.93,25.53,41.5,25.53L41.5,25.53z M26.28,25.53h10.83 c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0H26.28c-0.51,0-0.97,0.4-0.97,0.97v9.69 C25.37,25.08,25.77,25.53,26.28,25.53L26.28,25.53z M56.49,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97 l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,38.98,55.97,39.38,56.49,39.38L56.49,39.38L56.49,39.38z M41.5,39.38 h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C40.53,38.98,40.93,39.38,41.5,39.38L41.5,39.38L41.5,39.38z M26.28,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69 c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97v9.69C25.37,38.98,25.77,39.38,26.28,39.38L26.28,39.38z M11.35,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0 v9.69C10.44,38.98,10.84,39.38,11.35,39.38L11.35,39.38L11.35,39.38z"/></g></svg></a>
  <a href="https://github.com/features/actions" target="blank"><img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" height="80" alt="GitHub Actions Logo" /></a>
  <a href="https://newrelic.com/" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeSznsWIZTNxHAlwYAjBlW1Oy4CLGQCQbzw&s" height="80" alt="New Relic Logo" /></a>
</p>

## Estructura del Proyecto
```
devops-project/
├── .dockerignore
├── .git
├── .github
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── index.js
├── newrelic.js
├── package-lock.json
├── package.json
└── __tests__
```

## Configuración y Uso

### Clonación del Repositorio
Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/tu_usuario/devops-project.git
cd devops-project
```

### Construcción de la Imagen Docker
Construye la imagen de Docker:
```bash
docker build -t devops-project .
```

### Ejecución con Docker Compose
Ejecuta la aplicación utilizando Docker Compose:
```bash
docker-compose up
```

La API estará disponible en `http://localhost:5000`.

## Monitoreo
La aplicación está configurada para enviar métricas a New Relic.

## CI/CD
Se ha implementado un flujo de trabajo de GitHub Actions para la integración y entrega continua. Esto incluye la instalación de dependencias, la construcción del proyecto, la ejecución de pruebas y el despliegue automático en Render.

## Endpoints
- **GET /health**: Verifica el estado de la API.
- **POST /users**: Crea un nuevo usuario.
- **GET /users**: Obtiene todos los usuarios.
- **GET /users/:id**: Obtiene un usuario.
- **PUT /users/:id**: Actualiza un usuario existente.
- **DELETE /users/:id**: Elimina un usuario.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request si deseas colaborar.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
