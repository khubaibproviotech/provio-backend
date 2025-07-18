import express from "express";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import cors from "cors";
import helmet from "helmet";
const app = express();

app.use(express.json());

app.use(helmet());

app.use(cors());

mongoose.connect(
  `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@cluster0.edr3y4h.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
);
try {
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
} catch(err) {
  console.log("mongo error: " + err)
}

app.listen(3333, () => {
  console.log("server runing...");
});

app.use("/api", routes);
