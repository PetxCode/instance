const express = require("express");
const cors = require("cors");
const dbConfig = require("./dbConfig");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Hello from Dribble API!",
    });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

app.listen(80, () => {
  dbConfig();
});
