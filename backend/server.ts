// https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import { router } from "./routes/lobby";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const lobbyRouter: Router = router;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", lobbyRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
