import express from "express";
import { appRoutes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

appRoutes(app);

export default app;
