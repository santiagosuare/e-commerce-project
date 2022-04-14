const express = require("express");
const carritoRouter = express.Router();
const productoRouter = express.Router();

let carrito = [
  {
    id: 1,
    timestamp: "2020-01-01T00:00:00.000Z",
    productoRouter: [
      {
        id: 1,
        timestamp: "2020-01-01T00:00:00.000Z",
        nombre: "santiago",
        descripcion: "Articulo de limpieza",
        codigo: "123",
        foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        precio: 110,
        stock: 10,
      },
    ],
  },
];

carritoRouter.post("/", (req, res) => {
  carrito.push(req.body);
  res.json({
    mensaje: "se agrego correctamente el producto con id: " + req.body.id,
  });
});

carritoRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    let busquedaID = carrito.find((carrito) => carrito.id == id);
    if (parseInt(busquedaID.id) === parseInt(id)) {
      carrito.splice(busquedaID.id - 1, 1, req.body);
      res.json({ carrito });
    } else {
      res.json("el id no existe");
    }
  } catch (error) {
    throw "el id no existe";
  }
});

carritoRouter.get("/:id/productos", (req, res) => {
  const carritoId = carrito.find((carrito) => carrito.id == req.params.id);
  if (carritoId == undefined) {
    res.status(404).send("No se encontro el producto");
  } else {
    return res.json(carritoId);
  }
});

carritoRouter.post("/:id/productos", (req, res) => {
  const carritoId = carrito.find((carrito) => carrito.id == req.params.id);
  if (carritoId == undefined) {
    res.status(404).send("No se encontro el producto");
  } else {
    carritoId.productos.push(req.body);
    res.json({
      mensaje: "se agrego correctamente el producto con id: " + req.body.id,
    });
  }
});

carritoRouter.delete("/:id/productos/:id_prod", (req, res) => {
  const id = parseInt(req.params.id);
  const id_prod = parseInt(req.params.id_prod);
  try {
    let busquedaID = carrito.find((carrito) => carrito.id == id);
    if (parseInt(busquedaID.id) === parseInt(id)) {
      let busquedaID_prod = carritoId.productos.find(
        (producto) => producto.id == id_prod
      );
      if (parseInt(busquedaID_prod.id) === parseInt(id_prod)) {
        carritoId.productos.splice(busquedaID_prod.id - 1, 1, req.body);
        res.json({ carrito });
      } else {
        res.json("el id no existe");
      }
    } else {
      res.json("el id no existe");
    }
  } catch (error) {
    throw "el id no existe";
  }
});
