const express = require("express");
const productoRouter = express.Router();

let producto = [
  {
    id: 1,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 2,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 3,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 4,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 5,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 6,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 7,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
  {
    id: 8,
    timestamp: "2020-01-01T00:00:00.000Z",
    nombre: "manuel",
    descripcion: "Articulo de limpieza",
    codigo: "123",
    foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 110,
    stock: 10,
  },
];

productoRouter.get("/", (req, res) => {
  console.log(producto);
  res.json(producto);
});

productoRouter.get("/:id", (req, res) => {
  const productoId = producto.find((producto) => producto.id == req.params.id);
  if (productoId == undefined) {
    res.status(404).send("No se encontro el producto");
  } else {
    return res.json(productoId);
  }
});

productoRouter.post("/", (req, res) => {
  producto.push(req.body);
  res.json({
    mensaje: "se agrego correctamente el producto con id: " + req.body.id,
  });
});

productoRouter.put("/:id", (req, res) => {
  const productoId = producto.find((producto) => producto.id == req.params.id);
  if (productoId == undefined) {
    res.status(404).send("No se encontro el producto");
  } else {
    productoId.timestamp = req.body.timestamp;
    productoId.nombre = req.body.nombre;
    productoId.descripcion = req.body.descripcion;
    productoId.codigo = req.body.codigo;
    productoId.foto = req.body.foto;
    productoId.precio = req.body.precio;
    productoId.stock = req.body.stock;
    res.json({
      mensaje: "se actualizo correctamente el producto con id: " + req.body.id,
    });
  }
});

productoRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    let busquedaID = producto.find((producto) => producto.id == id);
    if (parseInt(busquedaID.id) === parseInt(id)) {
      producto.splice(busquedaID.id - 1, 1, req.body);
      res.json({ producto });
    } else {
      res.json("el id no existe");
    }
  } catch (error) {
    throw "el id no existe";
  }
});

module.exports = productoRouter;
