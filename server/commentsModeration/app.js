import express from "express";
import morgan from "morgan";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("I mm from moderation service:", req.body.data);

  if (event.type === "CommentCreated") {
    const status = event.data.content.includes("bitch")
      ? "rejected"
      : "approved";

    axios.post("http://event-bus-cluster-ip-service:4005/events", {
      type: "CommentModerated",
      data: {
        id: event.data.id,
        postId: event.data.postId,
        content: event.data.content,
        status: status,
      },
    });
  }

  res.send({ status: "OK" });
});

app.listen(4003, () => {
  console.log("Moderation Service Listening on 4003");
});
