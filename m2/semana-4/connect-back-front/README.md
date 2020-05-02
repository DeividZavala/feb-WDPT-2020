# Guia de proyecto

La intención de este doc es que puedan tomarlo como guia para crear sus propios proyectos durante el curso de ironhack, algo importante es que esta `no es una guia definitiva para contruir sus proyectos.`

## Tabla de contenido

### Creación de proyectos

1. [Comandos](#creación-de-proyectos)

### Backend

1. [Conexión a Mongo](#conexión-a-mongo)
1. [Modelos](#modelos)
1. [Rutas](#rutas)
1. [Cors](#cors)
1. [Middlewares](#middlewares)

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

### Proceso

La configuración de mongoose para conectarnos a la base de datos tiene que ir en el archivo `App.js`.
Lo primero es importar mongoose:

```javascript
const mongoose = require("mongoose");
```

Después tienes que agregar la conexión:

```javascript
mongoose
  .connect("dirección-DB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
```

---

## Modelos

En esta sección abordaremos la creación de modelos que necesitaremos para nuestra aplicación

### Tecnologías

- Mongoose

### Proceso

El primer paso es crear una carpeta `models` para poder agregar ahí todos los modelos de la aplicación, los nombres de los archivos tienen que ser con la primera letra en mayúsculas y singular `e.j. User.js`.

Dentro del archivos hacemos la importación de mongoose y definicion del Schema:

```javascript
const mongoose = require("mongoose");
const { Schema } = mongoose;
```

otra alternativa para la importación es la siguiente:

```javascript
const { Schema, model } = require("mongoose");
```

en la forma anterior estamos sacando el Schema y el model de mongoose inmediatamente.

> NOTA: Ojo en como hacen la importación, de esto dependerá el como deban usar el Schema y el model.

Una vez hecha la importación, creamos la base del modelo, en este caso usare como ejemplo el modelo de Usuario:

```javascript
// User.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    // propiedades de cada documento por ejemplo:
    email: {
      type: String,
      required: [true, "Debes agregar un correo"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
```

> NOTA: En este ejemplo estamos agregando incluso validaciones en el campo de email, es una de la muchas cosas que podemos hacer en el modelo

> NOTA: Recuerden que para agregar una relación entre colecciones lo debes hacer aquí de la siguiente manera:

```javascript
// OtherModel.js
{
    //...propiedades del schema
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}
```

---

## Rutas

### Tecnologías

- Mongoose

### Proceso

---

## Cors

### Tecnologías

- Mongoose

### Proceso

---

## Middleware

### Tecnologías

- Mongoose

### Proceso

---
