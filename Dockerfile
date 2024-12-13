# Etapa 1: Construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./

# Recibir variables de entorno desde build-args
ARG ADMIN_USERNAME
ARG ADMIN_PASSWORD
ARG JWT_SECRET

RUN echo "ADMIN_USERNAME=$ADMIN_USERNAME"
RUN echo "ADMIN_PASSWORD=$ADMIN_PASSWORD"
RUN echo "JWT_SECRET=$JWT_SECRET"

# Configurar variables de entorno en la imagen
ENV ADMIN_USERNAME=$ADMIN_USERNAME \
    ADMIN_PASSWORD=$ADMIN_PASSWORD \
    JWT_SECRET=$JWT_SECRET

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
