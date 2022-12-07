import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import userUpdatePasswordController from "../controllers/user/userUpdatePassword.controller";
import { authUSerMiddleware } from "../middlewares/authUser.middleware";
import validateUserCreateMiddleware from "../middlewares/validateUserCreate.middleware";
import { userSchema } from "../schemas/user.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "",
    validateUserCreateMiddleware(userSchema),
    userCreateController
  );
  routes.get("", authUSerMiddleware, userListController);
  routes.get("/:id", authUSerMiddleware, userListOneController);
  routes.delete(":id", authUSerMiddleware, userDeleteSelfController);
  routes.patch(":id", authUSerMiddleware, userUpdatePasswordController);

  return routes;
};
