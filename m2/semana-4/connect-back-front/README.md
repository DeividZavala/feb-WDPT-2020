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

La configuración de mongoose para conectarnos a la base de datos tiene que ir en el archivo `app.js`.
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

Las rutas son una del las partes más importantes de nuestra aplicación, es el lugar donde se va a definir que es lo que podemos hacer en la aplicación y donde hacer las peticiones para que esas cosas pacen.

### Tecnologías

- Express router

### Proceso

Lo primero que debemos hacer es crear el archivo donde vamos a definir las rutas, esto lo hacemos en la carpeta de `routes` que ya esta en nuestra aplicación.

Para este ejemplo usaremos como base un modelo de productos como lo que hicimos en esta aplicación.

Creamos el archivo `products.js` dentro de la carpeta `routes` y agregaremos 4 rutas que nos permitiran hacer el `CRUD` completo.

```javascript
const express = require("express");
const router = express.Router();
//Modelo
const Product = require("rutas-hasta-modelo");

// GET de todos los productos
router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({ result: products });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET de un solo producto
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id);
});

// CREATE un producto
router.post("/", (req, res) => {
  Product.create(req.body);
});

// UPDATE de un producto
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body, { new: true });
});

// DELETE de un producto
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id);
});
```

> NOTA: Cada ruta tienen las operaciones básicas que deben hacer para cada proceso ya que la lógica puede cambiar mucho para cada caso de uso.

---

## Cors

Los cors nos va a permitir resguardar nuestro backend de peticiones cuyo origen sea desconocido, de esta manera podemos controlar a quien le entregamos información y de quien la recibimos.

### Tecnologías

- Cors (paquete npm)

### Proceso

Lo primero es instalar el paquete via npm:

```shell
$ npm i cors
```

Una vez instalado, la configuración se agrega en el `app.js`

```javascript
//app.js

const cors = require("cors");

app.use(
  cors({
    // origenes permitidos
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);
```

---

## Middleware

Los middleware son funciones, nos permiten hacer validaciones o tratar información previo al controlador donde esta la lógica final que se ejecuta en cada ruta.

### Tecnologías

- express router
- JSON web token (si aplica)

### Proceso

La creación de los middlewares puede hacerse en una carpeta llamada `utils`, dentro de esta carpeta vamos a crear un archivo `auth.js` para los middlewares que usaremos en la validación de token y permisos en cada ruta como lo hicimos en la aplicación.

```javascript
//utils/auth.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.veryToken = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) return res.status(401).json({ error });
    User.findById(decoded.id).then((user) => {
      req.user = user;
      next();
    });
  });
};

exports.checkRole = (roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (roles.includes(role)) {
      return next();
    } else {
      return res
        .status(403)
        .json({ msg: "No tienes permiso para realizar esta acción" });
    }
  };
};
```

---
