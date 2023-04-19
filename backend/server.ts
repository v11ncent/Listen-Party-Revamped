// https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import express, { Express, Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./mongo";
import checkEnvExists from "./functions/checkEnvExists";
import { lobbyRouter } from "./routes/lobby";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb(checkEnvExists("MONGO_CONNECTION_STRING"));

app.use("/", lobbyRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
