# DevOps Project: Node.js API
[![Node.js CI](https://github.com/tinchobr/devops-project/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/tinchobr/devops-project/actions/workflows/node.js.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tinchobr_devops-project&metric=alert_status&token=6f3e9350b71d4c6048af2451fe2f8cb457d0373b)](https://sonarcloud.io/summary/new_code?id=tinchobr_devops-project)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=tinchobr_devops-project&metric=bugs&token=6f3e9350b71d4c6048af2451fe2f8cb457d0373b)](https://sonarcloud.io/summary/new_code?id=tinchobr_devops-project)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=tinchobr_devops-project&metric=code_smells&token=6f3e9350b71d4c6048af2451fe2f8cb457d0373b)](https://sonarcloud.io/summary/new_code?id=tinchobr_devops-project)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=tinchobr_devops-project&metric=coverage&token=6f3e9350b71d4c6048af2451fe2f8cb457d0373b)](https://sonarcloud.io/summary/new_code?id=tinchobr_devops-project)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=tinchobr_devops-project&metric=duplicated_lines_density&token=6f3e9350b71d4c6048af2451fe2f8cb457d0373b)](https://sonarcloud.io/summary/new_code?id=tinchobr_devops-project)

## Descripción del Proyecto
Este proyecto es una API RESTful construida con Node.js y Express que permite la gestión de usuarios a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). La API incluye un endpoint de verificación de estado para asegurar su correcto funcionamiento.

## Tecnologías Utilizadas

  ### Node JS
  <a href="https://nodejs.org/" target="blank"><img src="https://nodejs.org/static/images/logo.svg" height="80" alt="Node.js Logo" /></a>

  ### Express.js
  <a href="https://expressjs.com/" target="blank"><img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" height="80" alt="Express Logo" /></a>
  
  ### Docker
  <a href="https://www.docker.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" height="80" alt="Docker Logo" /></a>
  
  ### Github Actions
  <a href="https://github.com/features/actions" target="blank"><img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" height="80" alt="GitHub Actions Logo" /></a>
  
  ### New Relic
  <a href="https://newrelic.com/" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeSznsWIZTNxHAlwYAjBlW1Oy4CLGQCQbzw&s" height="80" alt="New Relic Logo" /></a>


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
