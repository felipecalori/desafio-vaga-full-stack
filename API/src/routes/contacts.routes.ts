import { Router } from "express";
import contactCreateControllers from "../controllers/contacts/contactCreate.controller";
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";
import contactDeleteSelfController from "../controllers/contacts/contatcDeleteSelf.controler";
import contactExistsValidationMiddleware from "../middlewares/contactExistsValidation.middleware";
import validationMiddleware from "../middlewares/validateUserCreate.middleware";
import { contactSchema } from "../schemas/contact.schema";

const routes = Router();

export const contactRoutes = () => {
  routes.post(
    "/:id",
    validationMiddleware(contactSchema),
    contactCreateControllers
  );
  routes.get("", contactListController);
  routes.delete(
    "/:id",
    contactExistsValidationMiddleware,
    contactDeleteSelfController
  );
  routes.patch(
    "/:id",
    contactExistsValidationMiddleware,
    contactUpdateController
  );
  return routes;
};
