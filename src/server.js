const express = require("express");
const router = require("./routes/indexRouter.js");
const logger = require("./logs/logs.js");
const { Server: SocketServer } = require("socket.io");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});
const Socket = require("./service/socket/socket");
require("dotenv").config({ path: "./src/.env" });

const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

const connectedServer = server.listen(PORT, function () {
  logger.info(`Server running on port ${PORT}`);
});
connectedServer.on("error", (error) => {
  logger.error(`Error server ${error}`);
});

Socket(io);
