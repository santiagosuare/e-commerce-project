const express = require("express");
const productoRouter = require("./routes/productosRouter");
const app = express();
const PORT = 8080 || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + server.address().port);
});

server.on("error", (error) => console.log("Hubo un error " + error));

app.use("/api/productos", productoRouter);
