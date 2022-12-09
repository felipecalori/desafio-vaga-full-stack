import { Response, Request } from "express";
import contactListService from "../../services/contacts/contactList.service";

const contactListController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const listContacts = await contactListService(userId);
    return res.json(listContacts);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactListController;
