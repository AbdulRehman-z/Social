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

app.post("/events", (req, res, next) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({});
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});