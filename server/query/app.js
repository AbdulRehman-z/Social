import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

const posts = {};

console.log(posts);

app.get("/posts", (req, res, next) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  if (req.body.type === "PostCreated") {
    const { id, title } = req.body.data;
    posts[id] = { id, title, comments: [] };
  }

  if (req.body.type === "CommentCreated") {
    const { id, content, postId } = req.body.data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
