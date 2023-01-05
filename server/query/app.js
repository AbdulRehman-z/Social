import express from "express";
import cors from "cors";
import axios from "axios";
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

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res, next) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log("Comment query", req.body);

  handleEvent(req.body.type, req.body.data);
});

app.listen(4002, async () => {
  console.log("Query Service Listening on 4002");

  const response = await axios.get("http://localhost:4005/events");

  for (let event of response.data) {
    console.log("Processing event:", event.type);
    handleEvent(event.type, event.data);
  }
});
