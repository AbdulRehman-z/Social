import express from "express";
import { randomBytes } from "crypto";
import morgan from "morgan";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const posts = {};

console.log(posts);
app.get("/posts", (req, res, next) => {
  res.send(posts);
});

app.post("/posts", async (req, res, next) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id: id,
      title: title,
    },
  });

  res.status(201).json(posts[id]);
});

app.post("/events", async (req, res, next) => {});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
