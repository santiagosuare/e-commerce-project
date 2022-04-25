const express = require("express");
const productoRouter = require("./routes/productosRouter");
const carritoRouter = require("./routes/carritoRouter");
const adminRouter = require("./routes/adminRouter");
const app = express();
const PORT = 8080 || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + server.address().port);
});

server.on("error", (error) => console.log("Hubo un error " + error));

app.use("/api/admin", adminRouter);
app.use("/api/productos", productoRouter);
app.use("/api/carrito", carritoRouter);
