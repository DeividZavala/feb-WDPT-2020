# Guia de proyecto

La intención de este doc es que puedan tomarlo como guia para crear sus propios proyectos durante el curso de ironhack, algo importante es que esta `no es una guia definitiva para contruir sus proyectos.`

## Tabla de contenido

### Creación de proyectos

1. [Comandos]()

### Backend

1. [Conexión a Mongo]()
1. [Modelos]()
1. [Rutas]()
1. [Cors]()
1. [Middlewares]()

### Frontend

1. [Code Review]()
1. [Pull Requests]()
1. [Growth]()
1. [Events]()

## Creación de proyectos

En esta sección abordaremos los comandos para crear tanto el backend como el frontend con sus respectivos comandos y herramientas.

### Tecnologías

- Express Generator
- Create react app

### Proceso

Primero levantaremos el backend con el express-generator, esta herramienta se instaló previamente en el curso con el comando:

```shell
$ npm i express-generator -g
```

Posteriormente ejecutaremos el comando para crear nuestro proyecto de backend:

```shell
$ express --no-view --git nombre-del-proyecto
```

una vez terminada la creación del proyecto tenemos que recordar que el express generator no instala las dependecias por lo que debemos cambiarnos al directorio del proyecto que acabamos de crear con el comando `cd nombre-del-proyecto` y correr el comando `npm i`.
Una vez terminada la instalación estamos listos con el backend.

Para el frontend el proceso es mucho mas simple.
Primero debemos asegurarnos que estamos a la misma altura que el proyecto de backend, una vez hecho eso, corremos el siguiente comando:

```shell
$ npx create-react-app nombre-del-proyecto
```

En caso del frontend esto es todo lo que tenemos que hacer ya el `create-react-app` crea los archivos necesario y también instala los paquetes necesarios para correr la aplicación.

---

## Conexión a Mongo

Esta parte es la primera etapa de configuración en el proyecto de backend.

### Tecnologías

- Mongoose

---
