const express = require("express");
const carritoRouter = express.Router();

let carrito = [];

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

carritoRouter.post("/", (req, res) => {
  carrito.push(req.body);
  res.json({
    mensaje: "Se creo correctamente el carrito, con numero id : " + req.body.id,
  });
});

carritoRouter.delete("/:id", (req, res) => {
  const carritoId = carrito.find((carrito) => carrito.id == req.params.id);
  if (carritoId == undefined) {
    res.status(404).send("No se encontro el carrito");
  } else {
    carrito.splice(carrito.indexOf(carritoId), 1);
    res.json({
      mensaje: "Se elimino correctamente el carrito con id: " + req.params.id,
    });
  }
});

carritoRouter.get("/:id/productos", (req, res) => {
  const carritoId = carrito.find((carrito) => carrito.id == req.params.id);
  if (carritoId == undefined) {
    res.status(404).send("No se encontro el carrito");
  } else {
    return res.json(carritoId);
  }
});

carritoRouter.delete("/:id/productos/:id_prod", (req, res) => {
  const carritoId = carrito.find((carrito) => carrito.id == req.params.id);
  if (carritoId == undefined) {
    res.status(404).send("No se encontro el carrito");
  } else {
    const productoId = carritoId.productos.find(
      (producto) => producto.id == req.params.id_prod
    );
    if (productoId == undefined) {
      res.status(404).send("No se encontro el producto");
    } else {
      carritoId.productos.splice(carritoId.productos.indexOf(productoId), 1);
      res.json({
        mensaje:
          "Se elimino correctamente el producto con id: " + req.params.id_prod,
      });
    }
  }
});

carritoRouter.get("/", (req, res) => {
  res.send(carrito);
});

module.exports = carritoRouter;
