import express from "express";
import http from "http";
import { Server as socketIo } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new socketIo(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("addProduct", () => {
    io.emit("notification", "A new product has been added!");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
