import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller - Copia";
import userUpdateController from "../controllers/user/userUpdate.controller";
import userEmailValidationMiddleware from "../middlewares/userEmailValidation.middleware";
import userExistsValidationMiddleware from "../middlewares/userExistsValidation.middleware";
import validationMiddleware from "../middlewares/validateUserCreate.middleware";
import { userSchema } from "../schemas/user.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "",
    validationMiddleware(userSchema),
    userEmailValidationMiddleware,
    userCreateController
  );
  routes.get("", userListController);
  routes.delete(
    "/:id",
    userExistsValidationMiddleware,
    userDeleteSelfController
  );
  routes.patch("/:id", userExistsValidationMiddleware, userUpdateController);
  routes.get("/:id", userExistsValidationMiddleware, userListOneController);

  return routes;
};
