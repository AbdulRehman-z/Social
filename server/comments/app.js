import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res, next) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res, next) => {
  const commentId = randomBytes(4).toString("hex");
  const { content, postId } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, postId });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      postId: req.body.params,
      content: content,
    },
  });

  res.status(201).json(comments);
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
