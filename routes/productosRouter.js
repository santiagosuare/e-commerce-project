const express = require("express");
const productoRouter = express.Router();

let producto = [
  {
    id: 1,
    timestamp: "",
    name: "Escuadra",
    descripcion: "Articulo Escolar",
    codigo: "45DEGF6",
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    precio: 90,
    stock: 10,
  },
  {
    id: 2,
    timestamp: "",
    name: "Lapicera",
    descripcion: "Articulo Escolar",
    codigo: "45LKGF8",
    url: "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png",
    precio: 55,
    stock: 10,
  },
  {
    id: 3,
    timestamp: "",
    name: "Libro",
    descripcion: "Articulo Escolar",
    codigo: "89IODA3",
    url: "https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Book-256.png",
    precio: 240,
    stock: 10,
  },
  {
    id: 4,
    timestamp: "",
    name: "Remera",
    descripcion: "Prenda de Ropa",
    codigo: "76NVAJ7",
    url: "https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/shirt_polo_apparel_clothing-256.png",
    precio: 75,
    stock: 10,
  },
  {
    id: 5,
    timestamp: "",
    name: "Zapatillas",
    descripcion: "Prenda de Ropa",
    codigo: "13PGFK3",
    url: "https://cdn3.iconfinder.com/data/icons/clothes-126/64/02-rainbootsfootwearbootrainingrainy-512.png",
    precio: 230,
    stock: 10,
  },
  {
    id: 6,
    timestamp: "",
    name: "Telefono",
    descripcion: "Articulo de Tecnologia",
    codigo: "22MCFD7",
    url: "https://cdn3.iconfinder.com/data/icons/object-emoji/50/MobilePhone2-256.png",
    precio: 300,
    stock: 10,
  },
  {
    id: 7,
    timestamp: "",
    name: "Notebook",
    descripcion: "Articulo de Tecnologia",
    codigo: "18FJUD3",
    url: "https://cdn1.iconfinder.com/data/icons/web-development-34/128/yumminky_development_03-256.png",
    precio: 450,
    stock: 10,
  },
  {
    id: 8,
    timestamp: "",
    name: "Reloj",
    descripcion: "Articulo de Tecnologia",
    codigo: "89JVFS0",
    url: "https://cdn4.iconfinder.com/data/icons/sport-fitness-vol-4-1/512/sport_watch_fitband_fitness-256.png",
    precio: 145,
    stock: 10,
  },
];

//Se realiza el formato del timestamp
const insertDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let miliseconds = date.getMilliseconds();
  let timestamp = `${hour}:${minutes}:${seconds}.${miliseconds}T${day}-${month}-${year}`;
  return timestamp;
};

productoRouter.get("/", (req, res) => {
  res.send(producto);
});

productoRouter.get("/:id", (req, res) => {
  const productoId = producto.find((producto) => producto.id == req.params.id);
  if (productoId == undefined) {
    res.status(404).send("No se encontro el producto con id: " + req.params.id);
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
    productoId.timestamp = insertDate();
    productoId.name = req.body.nombre;
    productoId.descripcion = req.body.descripcion;
    productoId.codigo = req.body.codigo;
    productoId.url = req.body.url;
    productoId.precio = req.body.precio;
    productoId.stock = req.body.stock;
    res.json({
      mensaje:
        "se actualizo correctamente el producto con id: " + req.params.id,
    });
  }
});

productoRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let indice = producto.findIndex((producto) => producto.id == id);
  try {
    let busquedaID = producto.find((producto) => producto.id == id);
    if (parseInt(busquedaID.id) === parseInt(id)) {
      producto.splice(indice, 1);
      res.send(producto);
    } else {
      res.json("el id no existe");
    }
  } catch (error) {
    throw "el id no existe";
  }
});

module.exports = productoRouter;
