import io from "socket.io-client";

let socket;

export const initiateSocket = () => {
  socket = io("http://localhost:8080");
  console.log(`Connecting socket...`);
};
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
export const subscribeToChat = (cb) => {
  if (!socket) return true;
  socket.on("server:sendMessage", (msg) => {
    console.log("Websocket event received!");
    console.log(msg);
    // return cb(null, msg);
  });
};
export const sendMessage = (message) => {
  if (socket) socket.emit("client:join", { message });
};
