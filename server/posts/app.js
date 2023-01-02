import express from "express";
import { randomBytes } from "crypto";
import { appendFile } from "fs";

const app = express();
app.use(express.json());

const posts = {};

app.get("/posts", (req, res, next) => {
  res.send(posts);

  res.status(200).json(posts);
});

app.post("/posts", (req, res, next) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).json(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
