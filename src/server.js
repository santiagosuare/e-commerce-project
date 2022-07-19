const express = require("express");
const app = express();
const router = require("./routes/indexRouter.js");
const logger = require("./logs/logs.js");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectedServer = app.listen(PORT, function () {
  logger.info(`Server running on port ${PORT}`);
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);

app.use("/api", router);
