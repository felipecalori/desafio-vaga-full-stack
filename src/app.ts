import express from "express";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

appRoutes(app);

app.listen(3000);

export default app;
