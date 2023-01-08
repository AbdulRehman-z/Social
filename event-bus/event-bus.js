import morgan from "morgan";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;
  events.push(event);

  // Posts
  await axios
    .post("http://posts-cluster-ip-service:4000/events", event)
    .catch((err) => {
      console.log(err.message);
    });

  //Comments
  await axios
    .post("http://comments-cluster-ip-service:4001/events", event)
    .catch((err) => {
      console.log(err.message);
    });

  //Query
  await axios
    .post("http://query-cluster-ip-service:4002/events", event)
    .catch((err) => {
      console.log(err.message);
    });

  //Comments Moderation
  await axios
    .post("http://comments-moderation-cluster-ip-service:4003/events", event)
    .catch((err) => {
      console.log(err.message);
    });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event-Bus Listening on 4005");
});
