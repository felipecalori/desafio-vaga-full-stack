import { Express } from "express";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", loginRoutes());
  app.use("/categories", categoriesRoutes());
  app.use("/properties", propertiesRoutes());
  app.use("/schedules", schedulesRoutes());
};
