const express = require("express");
const app = express();
const router = require("./routes/indexRouter.js");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectedServer = app.listen(PORT, function () {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);

app.use("/api", router);
