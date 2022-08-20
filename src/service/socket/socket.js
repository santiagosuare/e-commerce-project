const Daos = require("../../daos/mongo/mainMongo.daos");
const Chat = new Daos.chatDaos();
const logger = require("../../logs/logs");

module.exports = (io) => {
  io.on("connection", (socket) => {
    logger.info("New user connected", socket.id);

    socket.on("messageClient", (message) => {
      socket.broadcast.emit("messageClient", {
        body: message,
        from: socket.id,
      });
    });
  });
};
