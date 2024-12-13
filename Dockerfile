# Etapa 1: Construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./

RUN npm install

COPY . .

# Ejecutamos pruebas
RUN npm test

# Etapa 2: Imagen de Producción
FROM node:18-alpine

WORKDIR /app

# Copiamos las dependencias y código desde la etapa de construcción
COPY --from=build /app /app

# Exponemos el puerto de la aplicación
EXPOSE 5000

# Comando de inicio
CMD ["node", "index.js"]
