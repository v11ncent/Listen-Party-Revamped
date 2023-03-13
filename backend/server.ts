// https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import express, { Express, Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./mongo";
import { lobbyRouter } from "./routes/lobby";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const options: cors.CorsOptions = {
  origin: process.env.ALLOWED_ORIGINS,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const response = connectToDb(process.env.MONGO_CONNECTION_STRING as string);

app.use("/", lobbyRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
