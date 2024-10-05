import express, { Application, Request, Response } from "express";
import cors from "cors";

import { connect } from "mongoose";

const app: Application = express();
const PORT: number = 3000;
const URL: string =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/builderDB?retryWrites=true&w=majority&appName=Cluster0";

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Hello from Dribble API!",
    });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

app.listen(PORT, async () => {
  await connect(URL).then(() => {
    console.clear();
    console.log("DB connection ❤️❤️🚀🚀");
  });
});
