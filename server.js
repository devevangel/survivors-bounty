import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";

dotenv.config();
const app = express();
const server = http.Server(app);

// middlewares
app.use(cors());
app.use(express.static("client", { extensions: ["html"] }));
app.use(express.json());

// start server
const port = process.env.PORT || 8080;
server.listen(port, function () {
  console.log(`listening on port ${port}...`);
});
