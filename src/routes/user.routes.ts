import { Router } from "express";

import userCreateController from "../controllers/userCreate.controller";
import userDeleteSelfController from "../controllers/userDeleteSelf.controller";
import userListController from "../controllers/userList.controller";
import userListOneController from "../controllers/userListOne.controller";
import userLoginController from "../controllers/userLogin.controller";
import userUpdatePasswordController from "../controllers/userUpdatePassword.controller";
import { authUSerMiddleware } from "../middlewares/authUser.middleware";
import {
  userCreateSchema,
  validateUserCreateMiddleware,
} from "../middlewares/validateUserCreate.middleware";

const routes = Router();

routes.post(
  "/users",
  validateUserCreateMiddleware(userCreateSchema),
  userCreateController
);
routes.post("users/login", userLoginController);
routes.get("/users", authUSerMiddleware, userListController);
routes.get("users/me", authUSerMiddleware, userListOneController);
routes.delete("/users/me", authUSerMiddleware, userDeleteSelfController);
routes.patch(
  "/users/me/updatepassword",
  authUSerMiddleware,
  userUpdatePasswordController
);

export default routes;
